import Vue from "vue";
import Vuex from "vuex";
import PromiseWorker from "promise-worker-transferable";
import { str2ab, ab2str } from "./buffer-utils";
import { prettySize } from "./byte-utils"

Vue.use(Vuex);

import _babelWorker from "worker-loader!./babel-worker.js";

export const babelWorker = new PromiseWorker(_babelWorker());

function getSource(code) {
  return {
    code,
    pluginAlias: "source",
    visitorType: "enter",
    size: prettySize(new Blob([code], { type: "text/plain" }).size),
  };
}

const sourcePluginAlias = "source";
const sourceVisitorType = "enter";

import compileCode from "../example/";

export default new Vuex.Store({
  strict: true,
  state: {
    current: 0,
    transitions: [getSource("")],
    start: getSource("class Foo {}"),
    options: {
      presets: ["es2015"]
    },
    error: void 0,
    sw: null,
    curMenu: void 0
  },
  getters: {
    availablePresets() {
      return ["es2015", "stage-0", "stage-1", "stage-2", "stage-3"];
    }
  },
  mutations: {
    updateCurrent(state, current) {
      if (state.transitions.length >= current) {
        state.current = current;
      }
    },
    updateMenu(state, menu) {
      menu && (state.curMenu = menu);
      state.start = getSource(compileCode[state.curMenu] || "class Foo {}");
      //清空编译器
      state.transitions = [getSource("")];
    },
    updateSource(state, code) {
      // remove the error;
      if (state.error) {
        state.error = void 0;
      }
      //state.transitions[0] = getSource(code);
      state.start = getSource(code);
    },
    updatePresets(state, presets) {
      state.options.presets = [...presets];
    },
    
    clearTransitions(state) {
      state.transitions = [state.transitions[0]];
      state.current = 0;
    },
    receiveResult(state, transitions) {
      //state.transitions.push(...transitions);
      state.transitions = transitions;
      //(new Function(state.transitions[state.current].code))();
    },
    addError(state, error) {
      state.error = error;
    },
    removeError(state) {
      state.error = void 0;
    },
    setSw(state, reg) {
      state.sw = reg;
    },
    removeSw(state) {
      state.sw = null;
    }
  },
  actions: {
    error({ commit }, error) {
      commit("addError", error);
      setTimeout(() => {
        commit("removeError");
      }, 5000);
    },
    compile({ commit, state, dispatch }) {
      commit("clearTransitions");

      const message = {
        //source: str2ab(state.transitions[0].code ? state.transitions[0].code : state.start.code),
        source: str2ab(state.start.code),
        options: state.options
      };
      return babelWorker
        .postMessage(message, [message.source])
        .then(result => {
          const transitions = result.transitions.map(
            ({ code, pluginAlias, visitorType, currentNode, size }) => ({
              code: ab2str(code),
              pluginAlias,
              visitorType,
              currentNode,
              size: prettySize(new Blob([code], { type: "text/plain" }).size)
            })
          );

          commit("receiveResult", [transitions.pop()]);
          return transitions;
        })
        .catch(err => {
          dispatch("error", err.message);
        });
    },
    registerSw({ commit }) {
      if (navigator.serviceWorker) {
        navigator.serviceWorker.register("/sw.js").then(registration => {
          commit("setSw", registration);
        });
      }
    },
    clearCaches({ commit }) {
      commit("updateMenu");
      if (caches) {
        return caches
          .keys()
          .then(keyList => Promise.all(keyList.map(key => caches.delete(key))))
          .then(() => console.log("All caches removed"))
          .catch(err => console.error(err));
      }
      
    },
    unregisterSw({ state, commit }) {
      if (state.sw) {
        return state.sw.unregister().then(isUnregistered => {
          if (isUnregistered) {
            console.log("ServiceWorker unregistered");
            commit("removeSw");
          } else {
            console.error(new Error("UnRegistering ServiceWorker failed"));
          }
        });
      }
    }
  }
});

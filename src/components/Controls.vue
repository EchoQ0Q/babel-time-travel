<template>
  <div :class="$style.controls">
    <div :class="$style.container">
      <div :class="$style.control" v-model="total_presets" v-for="(preset, i) of allPresets">
        <Checkbox label="presets"></Checkbox>
        <label :for="preset + i">{{preset}}</label>
      </div>
    </div>

    <div :class="$style.container">
      <Button type="info" :class="$style.button" @click="compile">Compile</Button>
      <Button type="info" :class="$style.button" @click="clear" title="Purge Caches and unregister ServiceWorker">
        Reset
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  name: "controls",
  data() {
    //debugger;
    return {
      total_presets: ['es2015']
    };
    //return {};
  },
  computed: {
    allPresets() {
      return this.$store.getters.availablePresets;
    },
    presets: {
      get() {
        return this.$store.state.options.presets;
      },
      set(presets) {
        this.$store.commit("updatePresets", presets);
      }
    }
  },
  methods: {
    compile() {
      this.$store.dispatch("compile");
    },
    clear() {
      this.$store.dispatch("unregisterSw");
      this.$store.dispatch("clearCaches");
    }
  }
};
</script>

<style module>
.controls {
  padding: 4px;
}

.container {
  padding: 4px;
  margin: 4px;
  text-align: right;
}

.control {
  display: inline-block;
  padding: 4px;
}
</style>

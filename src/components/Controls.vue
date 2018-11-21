<template>
  <div :class="$style.controls">
    <Checkbox-group :class="$style.container" v-model="curPresets" @on-change="setPresets">
      <div :class="$style.control" v-for="(preset, i) of allPresets">
        <Checkbox :label="preset" >
          <span>{{preset}}</span>
        </Checkbox>
      </div>
    </Checkbox-group>

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
    return {
      curPresets: this.$store.state.options.presets
    };
  },
  // created() {
  //   this.curPresets = this.presets;
  // },
  computed: {
    allPresets() {
      return this.$store.getters.availablePresets;
    },
    //presets: {
      // get() {
      //   return this.$store.state.options.presets;
      // },
      // set(presets) {
      //   this.$store.commit("updatePresets", presets);
      // }
    //}
  },
  methods: {
    setPresets(presets) {
      this.$store.commit("updatePresets", presets);
    },
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

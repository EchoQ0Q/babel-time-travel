<template>
  <Layout :title="title">
    <Menus slot="menu"></Menus>
    <Editor slot="editor"></Editor>
    <Compile slot="compile"></Compile>
    <!-- <Slider slot="slider"></Slider> -->
    <Controls slot="controls"></Controls>
    <Errors slot="errors"></Errors>
  </Layout>
</template>

<script>
import Layout from "./components/Layout";
import Menus from "./components/Menu";
import Editor from "./components/Editor";
import Compile from "./components/Compile";
import Controls from "./components/Controls";
// import Slider from "./components/Slider";
import Errors from "./components/Errors";

export default {
  name: "app",
  props: ["title"],
  components: { Layout, Menus, Editor, Compile, Controls, Errors }
};
</script>

<style module>
body {
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  --gray: #bbbbbb;
}
</style>

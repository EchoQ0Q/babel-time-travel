<template>
  <div :class="$style.container">
    <div :class="$style.box">
      <header :class="$style.header">
        <h1 :class="$style.headerItem">{{title}}</h1>
        <div :class="$style.headerItem">
          <a href="https://github.com/boopathi/babel-time-travel" target="_blank">
            <img src="//cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg" width="24" height="24" />
          </a>
        </div>
        <div :class="$style.controls">
          <slot name="controls"></slot>
        </div>
      </header>
      <main :class="$style.main">
        <div :class="$style.menu">
          <slot name="menu"></slot>
        </div>
        <div :class="$style.content">
          <div :class="$style.editor">
            <slot name="editor"></slot>
          </div>
          <div :class="$style.compile">
            <slot name="compile"></slot>
          </div>
        </div>
        <div :class="$style.errors">
          <slot name="errors"></slot>
        </div>
        <!-- <div :class="$style.slider">
          <slot name="slider"></slot>
        </div> -->
      </main>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "app-layout",
  props: ["title"]
};
</script>

<style module>
*{
  box-sizing: border-box;
}

html,body{
  width: 100%;
  height: 100%;
}

.container{
  position: relative;
  padding: 20px;
  width: 100%;
  height: 100%;
}

.box {
  width: 100%;
  height: 100%;
}

.menu{
  position: absolute;
  left: 0;
  top: 0;
  width: 180px;
  height: 100%;
  border: 1px solid #ccc;
  overflow-y: auto;
}

.header {
  width: 100%;
  height: 95px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: black;
  border: solid 1px white;
}

.headerItem {
  padding: 0 10px;
}

.header h1 {
  font-size: 1.5em;
  font-weight: 100;
  width: 250px;
}

.main {
  position: relative;
  margin-bottom: 20px;
  padding-left: 200px;
  height: calc(100% - 95px);
  
}

.controls {
  width: 100%;
}

.slider {
  margin-top: 10px;
  width: 100%;
  border: solid 1px var(--gray);
}

.content{
  width: calc(100% - 95px);
  height: 100%;
  clear: both;
}

.editor,.compile {
  float: left;
  border: solid 1px var(--gray);
  width: 50%;
  height: 100%;
  box-sizing:border-box;
}

.editor{
  border-right: 0;
}

.editor :global(.CodeMirror), .compile :global(.CodeMirror) {
  //width: 100%;
  height: 100%;
}

.errors {
  width: 100%;
  position: relative;
}
</style>

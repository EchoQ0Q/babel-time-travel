<template>
  <div :class="$style.container">
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
      <div :class="$style.slider">
        <slot name="slider"></slot>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "app-layout",
  props: ["title"]
};
</script>

<style module>
.container {
  --width: calc(100vw - 100px);
  --height: 65vh;
}

.header {
  width: var(--width);
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.controls {
  width: 100%;
}

.slider {
  margin-top: 10px;
  width: var(--width);
  border: solid 1px var(--gray);
}

.content{
  width: var(--width);
  height: var(--height);
  clear: both;
}

.editor,.compile {
  float: left;
  border: solid 1px var(--gray);
  width: calc(var(--width) / 2);
  height: var(--height);
  box-sizing:border-box;
}

.editor{
  border-right: 0;
}

.editor :global(.CodeMirror), .compile :global(.CodeMirror) {
  //width: var(--width);
  height: 100%;
}

.errors {
  width: var(--width);
  position: relative;
}
</style>

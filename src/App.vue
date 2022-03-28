<template id="app">
  <router-view></router-view>
</template>

<script setup></script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/*清除em、i的斜体*/
em i {
  font-style: normal;
}
/*清除li标签的样式*/
li {
  list-style: none;
}
/*处理低版本浏览器图片外部有链接会产生边框现象、解决图片下方空白*/
img {
  border: 0;
  vertical-align: middle;
}
/*光标改成超链接指针*/
button {
  cursor: pointer;
}
/*超链接字体及悬浮字体*/
a {
  text-decoration: none;
}
/*字体*/
button,
input {
  font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB,
    '\5B8B\4F53', sans-serif;
}
#app {
  width: 100vw;
  margin: 0 auto;
  /*抗锯齿 让字体变清晰*/
  -webkit-font-smoothing: antialiased;
  background-color: #fff;
  font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB,
    '\5B8B\4F53', sans-serif;
}
</style>

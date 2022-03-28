<template>
  <div id="Dunj">
    <h2>
      <span style="--i: 1">欢</span>
      <span style="--i: 2">迎</span>
      <span style="--i: 3">来</span>
      <span style="--i: 4">到</span>
      <span style="--i: 5; margin-left: 5vw">梦</span>
      <span style="--i: 6">幻</span>
      <span style="--i: 7">舞</span>
      <span style="--i: 8">厅</span>
    </h2>
    <div class="ready"><button>Reday!!!</button></div>
  </div>
</template>

<script>
export default {
  name: 'Dunj',
  setup() {},
}
</script>

<style lang="scss" scoped>
#Dunj {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #111;
  h2 {
    display: flex;
    font-size: 10vw;
    color: transparent;
    span {
      animation: animate 3s linear infinite;
      animation-delay: calc(0.1s * var(--i));
    }
  }
  .ready {
    margin-top: 100px;
    button {
      width: 100px;
      height: 50px;
      font-size: 30px;
      border: none;
      background: transparent;
      color: #afc;
      text-shadow: 0 0 10px #fff;
      letter-spacing: 5px;
    }
  }
}
@keyframes animate {
  0% {
    color: #fff;
    filter: blur(1px) hue-rotate(0deg);
    text-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff;
  }
  30%,
  70% {
    color: #fff;
    filter: blur(1px) hue-rotate(360deg);
    text-shadow: 0 0 1px #00b3ff, 0 0 20px #00b3ff;
  }
  100% {
    color: transparent;
    box-shadow: none;
    text-shadow: none;
    filter: blur(2px) hue-rotate(0deg);
  }
}
</style>

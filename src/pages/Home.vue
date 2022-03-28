<template>
  <div class="home">
    <header>
      <a href="#" class="logo animate__animated animate__hinge">XX博客</a>
    </header>
    <div class="content">
      <div class="head-portrait">Xz</div>
      <p class="name">啊咧咧</p>
      <div class="cont">
        <p class="cont1">{{Asd == true ?  contText.contA : contText.contB}}</p>
      </div>
      <ul>
        <li><button @click="contChange(Asd = !Asd)">关于我</button></li>
        <li><button @click="$router.push('/blog')">进入博客</button></li>
        <li><button @click="goDunj()">钝角</button></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import {ref,reactive,watchEffect} from 'vue'
export default {
  name: 'Home',
  setup() {
    const router = useRouter()
    let Asd = ref(true)
    let contText = reactive({
      contA:'asdasd',
      contB:'我就是我，哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
    })
    // 路由跳转
    function goDunj() {
      router.push({
        path: '/dunj',
      })
    }
    return {
      goDunj,contText,Asd
    }
  },
}
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  background: red;
  overflow: hidden;
}
header {
  padding: 30px 100px;
  display: flex;
  justify-content: space-between;
  .logo {
    color: #bfc;
    font-weight: 700;
    text-decoration: none;
    font-size: 3em;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 0 0 10px #111;
  }
}
.content {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  .head-portrait {
    width: 150px;
    height: 150px;
    background: #afc;
    border-radius: 100px;
    text-align: center;
    line-height: 150px;
    transition: 1s;
  }
  .head-portrait:hover {
    opacity: 0.9;
    transform: rotate(360deg) scale(1.03);
  }
  .name {
    margin-top: 10px;
    font-size: 30px;
    color: #fff;
    text-shadow: 0 0 12px #fff;
  }
  .name:hover {
    text-shadow: 0px 0px 1px #fff;
    transition: all 0.5s;
  }
  .cont {
    text-align: center;
    margin-top: 10px;
    width: 700px;
    min-height: 60px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
    font-size: 16px;
    transition: all 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    .cont1{
      width: 300px;
    }
  }
  .cont:hover {
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0px 0px 12px #fff;
    transition: all 0.5s;
  }
  ul {
    display: flex;
    justify-content: start;
    margin-top: 20px;
    li {
      text-align: center;
      button {
        margin: 0 10px;
        height: 50px;
        width: 200px;
        border: 1px solid rgba(255, 255, 255, 0.4);
        border-radius: 25px;
        background-color: rgba(255, 255, 255, 0.1);
        color: #fff;
        font-size: 16px;
        transition: all 0.5s;
        letter-spacing: 5px;
      }
      button:hover {
        background-color: rgba(255, 255, 255, 0.4);
        box-shadow: 0px 0px 12px #fff;
        transition: all 0.5s;
      }
    }
  }
}
</style>

import { createApp } from 'vue'
import App from './App.vue'
import router  from './router'
//animate动画
import 'animate.css'

//将Toast组件挂载到vue原型上
import Toast from './components/Toast'
const app = createApp(App)

app.use(router)
app.mount('#app')
app.use(Toast) 
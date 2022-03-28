import { createApp } from 'vue'
import App from './App.vue'
import router  from './router'
//animate动画
import 'animate.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
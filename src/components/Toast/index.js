import { createApp } from 'vue'
import Toast from './index.vue'

//创建Toast构造器
let ToastConstrutor = createApp(Toast)
let instance

const toast = function(options = {}) {
    //设置默认参数为对象，如果参数为字符串，参数中message属性等于该参数
    if(typeof options === 'string') {
        options = {
            message: options
        }
    }
    //创建实例
    instance = new ToastConstrutor({
        data: options
    })
    //将实例挂载到body下
    document.body.appendChild(instance.$mount().$el)
}

export default toast
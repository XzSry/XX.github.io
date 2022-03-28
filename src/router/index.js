import {createRouter,createWebHashHistory} from 'vue-router';
import Home from '../pages/Home.vue'
import Blog from '../pages/Blog.vue'
import Dunj from '../pages/Dunj.vue'


const router = createRouter({
  history:createWebHashHistory(),
  routes:[
    {
      path:"/",
      name:"Home",
      component:Home
    },
    {
      path:"/blog",
      name:"Blog",
      component:Blog
    },
    {
      path:"/dunj",
      name:"Dunj",
      component:Dunj
    }
  ]
});

export default router 
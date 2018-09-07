import Vue from 'vue'
import Router from 'vue-router'


//cargar vistas
import HomeView from '@/components/Home/Home'
import RegistroView from '@/components/Registro/registro'
import MenuView from '@/views/Menu/menu'
import menuuView from '@/components/Componente-menu'
import TerrorView from '@/views/Gueneros/Terror'


Vue.use(Router)

export default new Router({
 
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path:'/registro',
      name:'RegistroView',
      component: RegistroView
    },
    {
    path:'/menu/menu',
    name:'Menu',
    component: MenuView
    },
    {
    path:'#',
    name:'Menuu',
    component: menuuView
    },
    {
      path:'/Sub/Gen/terror',
      name:'Terror',
      component: TerrorView
    }

  ]
})

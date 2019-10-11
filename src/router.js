import Vue from 'vue'
import Router from 'vue-router'
import Registro from './views/Registro.vue'
import Inicio from './views/Inicio.vue'
import Ingreso from './views/Ingreso.vue'
import Agregar from './views/Agregar.vue'
import Editar from './views/Editar.vue'

var firebase = require("firebase/app");

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio, 
      meta: { requiresAuth: true}
    },
    {
      path: '/registro',
      name: 'registro',
      component: Registro
    },
    {
      path: '/ingreso',
      name: 'ingreso',
      component: Ingreso
    },
    {
      path: '/agregar',
      name: 'agregar',
      component: Agregar,
      meta: { requiresAuth: true}
    },
    {
      path: '/editar/:id',
      name: 'editar',
      component: Editar,
      meta: { requiresAuth: true}
    }
  ]
})

router.beforeEach((to, from, next) =>{
  const rutaProtegida = to.matched.some(record => record.meta.requiresAuth);
  var user = firebase.auth().currentUser;

  if(rutaProtegida === true && user === null){
    next({name: 'ingreso'})
  }else{
    next()
  }

})

export default router;

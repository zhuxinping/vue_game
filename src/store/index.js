import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import home from './modules/home'
import session from './modules/session'
export default new Vuex.Store({
  modules:{
    home,
    session
  }
})






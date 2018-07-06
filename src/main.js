// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import router from './router'
import 'mint-ui/lib/style.css'
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
import VueClipboard from 'vue-clipboard2'
/*import Navigation from 'vue-navigation';
Vue.use(Navigation, { router, store });*/
Vue.use(VueClipboard);
Vue.use(MintUI);
Vue.use(YDUI);
Vue.config.productionTip = false;
import store from './store';
import * as Types from './store/mutation-types'

// 校验用户
router.beforeEach((to,from,next)=>{
  if(to.matched.some(item=>item.meta.needLogin)){
    // 需要校验登录
    store.dispatch(Types.VALIDATE,next);
  }else{
    store.dispatch(Types.VALIDATE);
    next();
  }
});


new Vue({
  el: '#app',
  ...App,
  data:{
    eventHub: new Vue()
  },
  router,
  store
});

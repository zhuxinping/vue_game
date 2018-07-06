import * as Types from '../mutation-types';
import {login,validate,logout} from '../../api/index';
const state = {
  user:null,
  msg:''
};
const getters ={
  getUser:(state) => state.user&&state.user.username,
  getMes:(state) => state.msg
}
const actions = {
  async [Types.LOGIN]({commit},userInfo){
    let router = userInfo.router;
    delete userInfo.router;
    let users = await login(userInfo);
    if(users.code == 0){ // 设置用户信息
      commit(Types.SET_USER_INFO,users.user)
      commit(Types.SET_ERROR_MSG,'登录成功');
      router.history.push('/profile')
    }else{
      commit(Types.SET_ERROR_MSG,users.error)
    }
  },
  // 校验登录
  async [Types.VALIDATE]({commit},next){
    let result = await validate();
    if(result.code == 1){
      next&&next('/login');
    }else{
      commit(Types.SET_USER_INFO,result.user);
      next&&next();
    }
  },
  async [Types.LOGOUT]({commit}){
    let result = await logout();
    // 成功则退出
    if(result.code == 0){
      commit(Types.LOGOUT);
    }
  }
};
const mutations = {
  [Types.SET_USER_INFO](state,userInfo){
    state.user = userInfo;
  },
  [Types.SET_ERROR_MSG](state,msg){
    state.msg = msg
  },
  [Types.LOGOUT](state){
    state.user = null;
  }
}
export default  {
  state,
  actions,
  getters,
  mutations
}

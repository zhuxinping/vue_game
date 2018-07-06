import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;
import { Toast } from 'mint-ui';
let toast = null;
axios.interceptors.request.use(function (config) {
  if(!toast){
      toast = Toast({
        message:'加载页面中',
        duration:-1,
        iconClass: 'iconfont icon-xiaolian'
      });
  }
  return config
});

axios.interceptors.response.use(function (res) {
  setTimeout(()=>{
    toast.close();
  },1000)
  return res.data;
});

// 获取轮播图
export function getSliders() {
  return axios.get('/api/sliders');
}
// 获取四个大房间
export function getRooms(id) {
  return axios.get(`/api/room?id=${id}`);
}
// 获取平台公告内容
export function getNotice() {
  return axios.get('/api/notice');
}
// 获取站内公告内容
export function getTips() {
  return axios.get('/api/tips');
}
// 获取红包记录
export function getMoney() {
  return axios.get('/api/money');
}
// 获取课程
export function getLessons(type,offset,limit) {
  return axios.get(`/api/lessons?type=${type}&offset=${offset}&limit=${limit}`);
}

//登录
export function login(user){
  return axios.post('/api/login',user);//{username,password}
}

//注册
export function reg(user){
  return axios.post('/api/reg',user);//{username,password}
}

// 注册
export function validate(){
  return axios.get('/api/validate');
}

// 退出
export function logout(){
  return axios.get('/api/logout');
}

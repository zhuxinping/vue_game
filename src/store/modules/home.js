import {getSliders,getLessons,getRooms} from '../../api/index';
import * as Types from '../mutation-types';
const state = {
  sliders:[],
  lessons: {
    loading: false,//是否加载中
    list: [],//课程列表
    offset: 0,//偏移量你从第几条开始取
    limit: 4,//最多取几条
    hasMore: true,//是否有更多，当它为true时候，才可以继续加载
    type:''
  },
  rooms:[]
};
const getters = {
    getSliders:(state)=> state.sliders,
    getRoom:(state)=> state.rooms,
    getLessons:(state)=>state.lessons.list,
    hasMore:(state)=>state.lessons.hasMore
};
const actions = {
  async [Types.GET_SLIDERS]({commit}){
    let sliders = await getSliders();
    commit(Types.GET_SLIDERS,sliders)
  },
  async [Types.GET_LESSONS]({commit,state}){
    if(state.lessons.hasMore&&!state.lessons.loading){
      commit(Types.SET_LOADING_STATUS,true);
      let lessons = await getLessons(state.lessons.type,state.lessons.offset,state.lessons.limit);
      commit(Types.GET_LESSONS,lessons)
    }
  },
  async [Types.GET_ROOMS]({commit}){
    let rooms=await  getRooms();
    console.log(rooms);
    commit(Types.GET_ROOMS,rooms);
  }
};
const mutations = {
  [Types.GET_SLIDERS](state,sliders){
    state.sliders = sliders;
  },
  [Types.SET_LOADING_STATUS](state,flag){
    state.lessons.loading = flag;
  },
  [Types.CLEAR_LESSONS](state){
    state.lessons.list = [];
    state.lessons.hasMore = true;
    state.lessons.offset = 0;
    state.lessons.loading = false;
  },
  [Types.CHANGE_TYPE](state,type){
    state.lessons.type = type;
  },
  [Types.GET_LESSONS](state,{list,hasMore}){
    state.lessons.list = [...state.lessons.list,...list];
    state.lessons.loading = false;
    state.lessons.hasMore = hasMore;
    state.lessons.offset = state.lessons.offset+list.length;
  },
  [Types.GET_ROOMS](state,rooms){
    state.rooms=rooms;
  }
};
export default  {
  state,
  getters,
  actions,
  mutations
}

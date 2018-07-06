<template>
    <div class="note-record">
      <yd-navbar class="header">
        <div @click="back" slot="left">
          <yd-navbar-back-icon color="#fff">返回</yd-navbar-back-icon>
        </div>
        <span slot="center">投注记录</span>
      </yd-navbar>
      <div class="pick">
       <div class="pick-item">
         <popup-picker value-text-align="text-align:center;"  :data="list1" :popup-title="title1" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange">
         </popup-picker>
         <i class="iconfont icon-down"></i>
       </div>
        <div class="pick-item">
          <popup-picker value-text-align="text-align:center;" :data="list2" :popup-title="title2" v-model="value2" @on-show="onShow" @on-hide="onHide" @on-change="onChange"></popup-picker>
          <i class="iconfont icon-down"></i>
        </div>
      </div>
      <div class="time-range">
        <span>时间筛选</span>
        <yd-datetime type="date" v-model="datetime1"></yd-datetime>
        <span> 至</span>
        <yd-datetime type="date" v-model="datetime2"></yd-datetime>
      </div>
      <div class="bottom-info">

      </div>
    </div>
</template>
<script>
  import {  PopupPicker } from 'vux'
    export default {
        data() {
            return {
              list1: [['全部类型', '幸运28', '加拿大28', '北京PK10', '幸运飞艇', '重庆时时彩', '三分彩','急速六合彩','六合彩','急速赛车','百人牛牛']],
              value1: ['全部类型'],
              title1:'请选择彩种类型',
              list2: [['全部状态', '已中奖', '未中奖', '待开奖', '撤单']],
              value2: ['全部状态'],
              title2:'请选择交易状态',
              datetime1: '2016-06',
              datetime2: '2016-07',
            }
        },
        created() {
        },
        methods: {
          back(){
            this.$router.go(-1);
          },
          onChange (val) {
            console.log(val)
          },
          onShow () {
            console.log('on show')
          },
          onHide (type) {
            console.log('on hide', type)
          }
        },
        computed: {},
        components: {
          PopupPicker
        }
    }
</script>
<style scoped lang="less">
  .time-range{
    padding: .2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f8f8;
    box-shadow: 0px 1px 0 0 rgba(35, 24, 21, 0.17);
    span{
      flex: 1;
      text-align: center;
    }
    .yd-datetime-input{
      flex: 1;
      text-align: center;
    }
  }
  .icon-down ,.icon-date{
    font-size: .3rem;
    color:#666;
  }
.note-record{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: #f5f5f5;
}
.header{
  background: #d22727!important;
  border-bottom: 1px solid #ffec83;
  div{
    color:#fff!important;
  }
  span{
    font-size: .3rem;
    color:#ffec83;
  }
}
  .pick-item{
    display: flex;
    flex:1;
    box-sizing: border-box;
    background: #fff;
    align-items: center;
    justify-content: center;
  }
  .pick{
    padding: 0 .2rem;
    display: flex;
    box-sizing: border-box;
    background: #fff;
    align-items: center;
    justify-content: center;
    .vux-cell-box{
      flex:1;
      text-align: center !important;
      padding: .2rem 0;
    }
  }

</style>

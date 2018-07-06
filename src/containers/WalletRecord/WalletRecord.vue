<template>
    <div  class="wallet">
      <yd-navbar class="header">
        <div @click="back" slot="left">
          <yd-navbar-back-icon color="#fff">返回</yd-navbar-back-icon>
        </div>
        <span slot="center">红包记录</span>
      </yd-navbar>
      <yd-cell-item arrow>
        <span slot="left">时间选择：</span>
        <yd-datetime type="month" v-model="datetime" slot="right"></yd-datetime>
      </yd-cell-item>
      <ul class="moneyList" v-if="moneyList">
        <li  v-for="(item,index) in moneyList">
         <span>红包{{item.money}}元</span>
          <span>{{formatDated(item.rateTime)}}</span>
        </li>
      </ul>
      <div v-else class="nothing">暂无数据</div>
    </div>
</template>
<script>
  import {getMoney} from '../../api'
  import {formatDate} from '../../common/js/date'
    export default {
        data() {
            return {
              datetime:'',
              moneyList:[]
            }
        },
        created() {
          this.getMoneyData();
        },
        methods: {
          formatDated(time){
            return formatDate(time);
          },
          async getMoneyData(){
           let money= await getMoney();
           //console.log(money);
           this.moneyList=money;
          },
          back(){
            this.$router.go(-1);
          },
      open() {
        this.$refs.datetime.open();
      }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
.nothing{
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: .3rem;
  color:#d7d7d7;
  background: #fff;
}
.wallet{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
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
  .moneyList{
    background: #fff;
    li{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #d7d7d7;
      padding: .2rem .4rem;
      span{
        font-size: .3rem;
        color:#666;
      }
    }
  }
</style>

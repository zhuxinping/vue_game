<template>
    <div class="with-draw">
      <yd-navbar class="header">
        <div @click="back" slot="left">
          <yd-navbar-back-icon color="#fff">返回</yd-navbar-back-icon>
        </div>
        <span slot="center">提现</span>
      </yd-navbar>
      <div class="bank-wrapper">
        <div class="bank">
          <span>工商银行</span>
          <p>**** **** **** 1212</p>
          <em>限额:单笔最低100元 最高1000000元</em>
        </div>
      </div>
      <yd-cell-group style="margin-top: .2rem">
        <yd-cell-item>
          <span slot="left"> <i class="iconfont icon-money"></i>提现金额:</span>
          <yd-input   type="number" ref="input" class="jine" slot="right" required v-model="input"  placeholder="请输入金额(单位:人民币)"></yd-input>
        </yd-cell-item>
      </yd-cell-group>
      <div class="pay-now" @click="pay">立即提现</div>
       <KeyBoard :input="input" v-on:backFnc="backFnc" v-show="flag"></KeyBoard>
    </div>
</template>
<script>
  import KeyBoard from '../../components/KeyBoard.vue'
    export default {
        data() {
            return {
            input:'',
              flag:false
            }
        },
        created() {
        },
        methods: {
          backFnc(){
            this.flag=false;
            this.input='';
          },
          back(){
            this.$router.go(-1);
            this.input='';
          },
          openAlert(message) {
            this.$dialog.alert({mes: message});
          },
          pay(){
            if(this.input==''){
              this.openAlert('输入金额不能为空!');
              return;
            }
            if(this.input<=100){
              this.openAlert('输入金额不能小于100!');
              return;
            }
            if(this.input>1000000){
              this.openAlert('输入金额不能大于1000000!');
              return;
            }
            this.flag=true;
          },
        },
        computed: {},
        components: {
          KeyBoard
        }
    }
</script>
<style scoped lang="less">
  .pay-now{
    margin: .4rem auto 0 auto;
    width: 95%;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    font-size: .3rem;
    color:#fff;
    background:#d22727;
    border-radius: .05rem;
  }
  .icon-money{
    color:#f90;
    font-size: .4rem;
  }
.with-draw{
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
  .bank-wrapper{
    background: #fff;
    padding: .4rem .25rem;
    .bank{
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding-left: .4rem;
      box-sizing: border-box;
      background: url('../../assets/bankbg_pic@2x.png') no-repeat center;
      background-size: 100% 100%;
      width:7rem;
      height: 3.6rem;
      border-radius: .25rem;
      position: relative;
      span{
        font-size: .5rem;
        font-weight: bold;
        line-height: 1.4rem;
        color:#fff;
      }
      p{
        font-size: .5rem;
        font-weight: bold;
        line-height: 1.4rem;
        color:#fff;
      }
      em{
        align-self: center;
        font-size: .2rem;
        color:#fff;
      }
    }
  }
</style>

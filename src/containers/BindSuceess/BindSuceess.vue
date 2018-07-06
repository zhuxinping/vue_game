<template>
  <div class="payInfo">
    <yd-navbar class="header">
      <div @click="back" slot="left">
        <yd-navbar-back-icon color="#fff">返回</yd-navbar-back-icon>
      </div>
      <span slot="center">绑定成功</span>
    </yd-navbar>
    <div class="pay-msg">
      <img src="../../assets/ico-complete.png" alt="">
      <p>绑定成功</p>
    </div>
    <ul class="info-list">
      <li>
        <span>{{bankName}}</span>
        <span>{{cardNum}}</span>
      </li>
    </ul>
    <div class="pay-now" @click="goWallet">完成</div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
              bankName:'',
              inputcard:''
            }
        },
        created() {
        },
        methods: {
          back(){
            this.$router.go(-1);
          },
          goWallet(){
            this.$router.push('/wallet');
          }
        },
      beforeRouteEnter(to,from,next){
        let {bankName,inputcard}=to.query;
        next(vm=>{
          vm.bankName=bankName;
          vm.inputcard=inputcard;
        });
      },
        computed: {
        cardNum(){
          return this.inputcard.replace(/[0-9]/ig,'*')
        }
        },
        components: {}
    }
</script>
<style scoped lang="less">
  .info-list{
    margin-top: .2rem;
    li{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 .4rem;
      background: #fff;
      border-bottom: 1px solid #d7d7d7;
      font-size: .3rem;
      color:#333;
      height: .8rem;
    }
  }
  .pay-msg{
    display: flex;
    width: 100%;
    padding: .4rem 0 .2rem 0;
    background: #fff;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img{
      width: 2.26rem;
      height: 2.81rem;
    }
    p{
      font-size: .3rem;
      line-height: .46rem;
      color:#333;
    }
  }
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
  .payInfo{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: #f5f5f5;
  }
</style>

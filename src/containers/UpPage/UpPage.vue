<template>
    <div>
      <div class="payInfo">
        <yd-navbar class="header">
          <div @click="back" slot="left">
            <yd-navbar-back-icon color="#fff">返回</yd-navbar-back-icon>
          </div>
          <span slot="center">{{item.payWay}}</span>
        </yd-navbar>
        <div class="pay-msg">
          <img :src="item.imgCode" alt="">
          <span>{{this.input}}</span>
          <p>无需加好友,扫二维码向我付钱</p>
        </div>
        <div class="tips">
          <h4>温馨提示：</h4>
          <!--QQ钱包支付-->
          <p>1.您可以截图当前屏幕，也可以用其他手机{{item.type}}号扫描支付。</p>
          <p>2.请在{{item.type}}号中打开“扫一扫”。</p>
          <p>3.在扫一扫中点击右上角“相册”，从相册中选择刚才保存的屏幕截图。</p>
          <p>4.在{{item.type}}号中完成支付后，回到此页面点击“我已支付”。</p>
          <p>5.如充值未及时到账，请联系在线客服。</p>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
              item:{},
              input:''
            }
        },
        created() {
        },
        methods: {
          back(){
            this.$router.go(-1);
          }
        },
      beforeRouteEnter(to,from,next){
        let {item,input}=to.query;
        next(vm=>{
          vm.item=item;
          //console.log(vm.item);
          vm.input=input;
        });
      },
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
  .tips{
    padding: .2rem;
    margin: .2rem;
    border: 1px solid #d7d7d7;
    border-radius: 4px;
    p{
      font-size: .3rem;
      line-height: .46rem;
      color:#949494;
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
      width: 1.98rem;
    }
    p{
      font-size: .3rem;
      line-height: .46rem;
      color:#333;
    }
    span{
      font-size: .6rem;
      color:#000;
      font-weight: bold;
    }
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

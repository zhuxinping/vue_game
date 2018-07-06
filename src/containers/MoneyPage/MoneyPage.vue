<template>
    <div class="content-wrapper">
      <yd-navbar class="header">
        <div @click="link" slot="left">
          <yd-navbar-back-icon color="#fff">返回</yd-navbar-back-icon>
        </div>
        <span slot="center">{{item.payWay}}</span>
      </yd-navbar>
      <div class="profile-bg">
        <img src="../../assets/profile.png"/>
        <div>
          <span>会员账号:</span><a v-if="getUser">{{getUser}}</a>
        </div>
      </div>
      <div class="tips">
        <p>【温馨提示】</p>
        <p>1.填入正确的金额，然后点击“立即充值”按钮</p>
        <p>2.系统会返回支付二维码或跳转第三方支付平台进行充值。</p>
        <p>3.充值完成之后，等待账户到账。</p>
        <p>4.如充值未及时到账，请联系在线客服。</p>
      </div>
      <yd-cell-group style="margin-top: .2rem">
        <yd-cell-item>
          <span slot="left"> <i class="iconfont icon-money"></i>充值金额:</span>
          <yd-input   type="number" ref="input" class="jine" slot="right" required v-model="input"  placeholder="请输入金额(单位:人民币)"></yd-input>
        </yd-cell-item>
      </yd-cell-group>
      <div class="pay-now" @click="pay">立即支付</div>
    </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex';
  import * as Types from '../../store/mutation-types'
  import img1 from "../../assets/zhifubao2.png";
  import img2 from "../../assets/weixin.png";
  import img3 from "../../assets/qqWallet.png";
  import img4 from "../../assets/yinlian2.png";
  import imgCode1 from "../../assets/qqcode.png";
  import imgCode2 from "../../assets/weixincode.png";
  export default {
        data() {
            return {
              input:'',
              item:{},
              payList:[
                {id:1,img:img4,payWay:"闪付快捷支付",imgCode:imgCode1,type:"银联"},
                {id:2,img:img2,payWay:"可可微信扫码支付",imgCode:imgCode1,type:"QQ"},
                {id:3,img:img3,payWay:"可可QQ钱包宝扫码支付",imgCode:imgCode2,type:"微信"}
              ],
            }
        },
        created() {

        },
        methods: {
          link(){
            this.$router.go(-1);
          },
          openAlert(message) {
            this.$dialog.alert({mes: message});
          },
          openLoading(cb) {
            this.$dialog.loading.open('正在提交支付信息');

            setTimeout(() => {
              this.$dialog.loading.close();
              cb();
            }, 2000);
          },
          MoneyPage(){
            this.$router.push({
              path:'/up',
              query:{
                item:this.item,
                input:this.input
              }
            });
          },
          pay(){
            if(this.input==''){
              this.openAlert('输入金额不能为空!');
              return;
            }
            if(this.input<=10){
              this.openAlert('输入金额不能小于10!');
              return;
            }
            if(this.input>100000){
              this.openAlert('输入金额不能大于100000!');
              return;
            }
            this.openLoading(this.MoneyPage);
          },
        },
      beforeRouteEnter(to,from,next){
        let  {id}=to.params;
        //console.log(id,to);
        next(vm=>{
         // console.log(vm.payList.find(item=>item.id==id))
         vm.item=vm.payList.find(item=>item.id==id);
        });
      },
      computed: {
        ...mapGetters(['getUser']),

      },
        components: {}
    }
</script>
<style scoped lang="less">
  .content-wrapper{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: #f5f5f5;
  }
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
  .icon-money{
    color:#f90;
    font-size: .4rem;
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
  .jine{
    border-radius: 5px;
    border: 1px solid #d2d2d2;
    height: .8rem;
    padding-left: .2rem;
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

    .profile-bg {
      background:#d22727;
      background-size: contain;
      width: 100%;
      height:3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img {
        width: 1.2rem;
        height:1.2rem;
        border-radius: 50%;
      }
      div {
        background-color: #d22727;
        color: #fff;
        height: .5rem;
        border-radius: .1rem;
        text-align: center;
        line-height: .5rem;
        margin-top: .16rem;
        font-size: .3rem;
        a{
          color:#fff;
          font-size: .3rem;
        }
      }
    }

</style>

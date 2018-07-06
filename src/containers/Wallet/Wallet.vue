<template>
    <div class="wallet">
      <yd-navbar class="header">
        <div @click="showFlag=true" slot="left">
          <i class="icoRefresh"></i>
        </div>
        <span slot="center">钱包</span>
        <i @click="goRecord" class="iconfont icon-redenvelope" slot="right"><span>红包</span></i>
      </yd-navbar>
      <div class="profile-bg">
        <div>
          <ul>
            <li>账户余额</li>
            <li class="cur">0</li>
          </ul>
        </div>
      </div>
      <ul class="cash">
        <router-link to="/recharge"><li class="icoRecharge"><span>立即充值</span> <i class="iconfont icon-right"></i></li></router-link>
        <router-link to='/withdraw'><li class="icoWithdraw"><span>我要提现</span> <i class="iconfont icon-right"></i></li></router-link>
      </ul>
      <ul class="cash">
        <router-link to="/bankcard"><li class="icoCz3"><span>银行卡</span> <i class="iconfont icon-right"></i></li></router-link>
        <router-link to='/withdraw'><li class="icoCz4"><span>交易记录</span> <i class="iconfont icon-right"></i></li></router-link>
      </ul>
      <ul class="cash">
        <li @click="show1=true" class="icoCz5"><span>支付安全</span> <i class="iconfont icon-right"></i></li>
      </ul>
      <div class="wallet-mask" v-show="showFlag">
        <div class="mask-in">
          <i class="configClose" @click="showFlag=false"></i>
          <div class="bindBank_con">
            <div class="tit_img"></div>
            <div class="tit_bind">绑定银行卡</div>
            <div class="info_bind">为保障您的账户资金安全，需先成功绑定银行卡才能进行安全提现。</div>
            <router-link to="/bankcard"><p>立即绑定</p></router-link>
          </div>
        </div>
      </div>
      <yd-keyboard v-model="show1" title="万华安全键盘" input-text="请输入支付密码" :callback="done1" ref="keyboardDemo1"></yd-keyboard>
      <yd-keyboard v-model="show2"title="万华安全键盘" input-text="请再次输入支付密码":callback="done2" ref="keyboardDemo2"></yd-keyboard>
    </div>
</template>
<script>
    export default {
        data() {
            return {
              showFlag:true,
              show1:false,
              show2:false,
              val1:''
            }
        },
        created() {
        },
        methods: {
          back(){
            this.$router.go(-1);
          },
          toastSuccess(message) {
            this.$dialog.toast({
              mes: message,
              timeout: 1500,
              icon: 'success'
            });
          },
          done1(val) {
            this.show1=false;
            this.show2=true;
            console.log('输入的密码是：' + val);
            this.val1=val;
            //this.$dialog.loading.open('验证支付密码');

            /* 模拟异步验证密码 */
            /* setTimeout(() => {
               this.$refs.keyboardDemo1.$emit('ydui.keyboard.error', '对不起，您的支付密码不正确，请重新输入。');
               this.$dialog.loading.close();
             }, 2000);*/
          /*  this.$router.push({
              path:'/safepwdtwo',
              params:{
                val:val
              }
            });*/
          },
          done2(val){
            if(this.val1==val){
              console.log('设置密码成功!');
              this.toastSuccess('设置密码成功!');
              this.show2=false;
            }else{
              this.$refs.keyboardDemo2.$emit('ydui.keyboard.error', '对不起，您的两次输入密码不一致，请重新输入。');
            }

          },
          goRecord(){
            this.$router.push('/walletrecord')
          }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
  .icon-font{
    font-size: .3rem;
    color: #242424;
  }
  .cash{
    margin-bottom: .2rem;
    li{
      display: flex;
      height: 1rem;
      line-height: 1rem;
      border-bottom: 1px solid #d2d2d2;
      color: #48484c;
      font-size: .24rem;
      padding-left: 1.4rem;
      background-repeat: no-repeat;
      background-position: .4rem center;
      padding-right: .2rem;
      a{
        color: #48484c;
      }
      &.active{
        color:green;
      }
      span{
        flex: 1;
        font-size: .3rem;
        color:#242424;
      }
    }
  }
  .icoRecharge {
    background-image: url('../../assets/index_chongzhi_icon@2x.png');
    background-size: .5rem .5rem;
  }
  .icoWithdraw {
    background-image: url('../../assets/index_tixian_icon@2x.png');
    background-size: .5rem .5rem;
  }
  .icoCz3 {
    background-image: url('../../assets/ico-cz3.png');
    background-size: .5rem .5rem;
  }
  .icoCz4 {
      background-image: url('../../assets/ico-cz4.png');
      background-size: .5rem .5rem;
    }
  .icoCz5{
    background-image: url('../../assets/ico-cz5.png');
    background-size: .5rem .5rem;
  }
  .profile-bg {
    background:#d22727;
    background-size: contain;
    width: 100%;
    height:3.2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 1.2rem;
      height:1.2rem;
      border-radius: 50%;
    }
    div {
      background-color: #d22727;
      font-size: .3rem;
      color: #fff;
      height: .5rem;
      border-radius: .1rem;
      text-align: center;
      line-height: .5rem;
      margin-top: .16rem;
      padding-left: .4rem;
      ul{
        li{
          &.cur{
            margin-top: .4rem;
            font-size: .8rem;
            font-weight: bold;
          }
        }
      }
    }
  }
  .icoRefresh{
    width: .7rem;
    height:.6rem;
    display: block;
    background: url('../../assets/ico-refresh.png') no-repeat;
    background-size: 100% 100%;
  }
  .wallet-mask{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 99999;
    .mask-in{
      width: 5.6rem;
      min-height: 2.56rem;
      padding: .4rem;
      position: absolute;
      margin: auto;
      left: 50%;
      transform: translate(-50%, -50%);
      top: 50%;
      background: #fff;
      border-radius:.1rem;
    }
    .bindBank_con .tit_img {
      width: 100%;
      height: 2.2rem;
      background: url('../../assets/pic_bankset@2x.png') no-repeat center;
      background-size: 290px;
    }
    .bindBank_con .tit_bind {
      font-size: .4rem;
      line-height: 1.2rem;
      text-align: center;
      color: #61b7ff;
    }
    .bindBank_con .info_bind {
      font-size: .24rem;
      /* line-height: 1.55; */
      text-align: center;
      color: #909090;
    }
    .bindBank_con a p {
      margin-top: .5rem;
      line-height: .8rem;
      font-size: .28rem;
      color: #fff;
      border-radius: 4px;
      background-image: linear-gradient(to top, #f04a49, #f36d5c);
      text-align: center;
    }
    .configClose {
      position: absolute;
      bottom: -1.4rem;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: .68rem;
      height: .68rem;
      background: url('../../assets/close_pop_icon@2x.png') no-repeat;
      background-size: cover;
      z-index: 99;
      border-radius: 50%;
    }
  }
.wallet{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 1rem;
  width: 100%;
  z-index: 99;
  background: #f5f5f5;
}
.icon-redenvelope{
  font-size: .4rem;
  color:#ff4545;
  span{
    color:#ffec83;
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
</style>

<template>
    <div class="content-wrapper">
      <yd-navbar class="header">
        <div @click="link" slot="left">
          <yd-navbar-back-icon color="#fff">返回</yd-navbar-back-icon>
        </div>
        <span slot="center">{{item.payWay}}</span>
      </yd-navbar>
     <div class="topbar">
       <img :src="item.img" alt="">
       <span>{{item.payWay}}</span>
       <div class="wallet">
         <p>开户行：<span>{{bank}}</span><i v-clipboard:copy="bank" v-clipboard:success="onCopy" v-clipboard:error="onError" class="iconfont icon-copy"></i></p>
         <p>银行卡号：<span>{{bankNum}}</span><i v-clipboard:copy="bankNum" v-clipboard:success="onCopy" v-clipboard:error="onError" class="iconfont icon-copy"></i></p>
         <p>账号名称：<span>{{bankName}}</span><i v-clipboard:copy="bankName" v-clipboard:success="onCopy" v-clipboard:error="onError" class="iconfont icon-copy"></i></p>
       </div>
     </div>
      <yd-cell-group style="margin-top: .2rem">
        <yd-cell-item>
          <span slot="left"> <i class="iconfont icon-money"></i>充值金额:</span>
          <yd-input   type="number" ref="input" class="jine" slot="right" required v-model="input"  placeholder="请输入金额(单位:人民币)"></yd-input>
        </yd-cell-item>
      </yd-cell-group>
      <div class="warn"><i class="iconfont icon-warning"></i> {{item.desc}},建议通过银行卡转账入款</div>
      <div class="tips">
        <p>【温馨提示】</p>
        <p>1.选择您可进行转账的方式</p>
        <p>2.通过相应的转账软件，转入我们提供的平台账户</p>
        <p>3.转账金额需要和填写金额保持一致。</p>
        <p>4.在转账时，把附加码填写到备注或附言。</p>
      </div>
      <div class="code">
        <span><i class="iconfont icon-iconfontxingxing"></i>附加码</span>
        <span>{{code}}</span>
        <i v-clipboard:copy="code" v-clipboard:success="onCopy" v-clipboard:error="onError" class="iconfont icon-copy"></i>
      </div>
      <div class="pay-now" @click="pay">立即支付</div>
    </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex';
  import img1 from '../../assets/zhifubao2.png';
  import img2 from '../../assets/weixin.png';
  import img3 from '../../assets/qqWallet.png';
  import img4 from '../../assets/yinlian.png';
  import * as Types from '../../store/mutation-types'
    export default {
        data() {
            return {
              input:'',
              item:{},
              bank:'联系平台客服获取',
              bankNum:'联系平台客服获取',
              bankName:'联系平台客服获取',
              code:'98805HDvdv8',
              payList:[
                {id:1,img:img2,payWay:"微信转银行",desc:"(充值限额:10.00~999999.00)"},
                {id:2,img:img4,payWay:"银联",desc:"(充值限额:10.00~999999.00)"},
                {id:3,img:img3,payWay:"QQ钱包",desc:""},
                {id:4,img:img2,payWay:"个人微信(王者28红包充值)",desc:"(充值限额:10.00~999999.00)"},
                {id:5,img:img1,payWay:"支付宝",desc:"(充值限额:10.00~999999.00)"},
                {id:6,img:img1,payWay:"支付宝转银行",desc:"(充值限额:10.00~999999.00)"}
              ]
            }
        },
        mounted() {

        },


        methods: {
          onCopy(){
            this.toastSuccess(`你复制成功`);
          },
          onError(){
            this.toastSuccess(`你复制失败!`);
          },
          toastSuccess(message) {
            this.$dialog.toast({
              mes: message,
              timeout: 1500,
              icon: 'success'
            });
          },
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
          MoneyPageTwo(){
            this.$router.push({
              path:'/down',
              query:{
                item:this.item,
                code:this.code,
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
            this.openLoading(this.MoneyPageTwo);
          },

        },
      beforeRouteEnter(to,from,next){
        let  {id}=to.params;
       // console.log(id);
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
  .code{
    display: flex;
    margin: 0 .2rem;
    padding: 0 .2rem;
    height: .8rem;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-top: 1px solid #d7d7d7;
    border-bottom: 1px solid #d7d7d7;
  }
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
  .warn{
    color:#666;
    text-align: center;
  }
  .wallet{
    p{
      font-size: .26rem;
      line-height: .56rem;
      color:#333;
    }
  }
  .icon-copy{
    font-size: .3rem;
  }
  .icon-warning{
    font-size: .3rem;
    color:red;
  }
  .icon-iconfontxingxing{
    font-size: .3rem;
    color:#f90;
  }
  .topbar{
    display: flex;
    width: 100%;
    padding-top: .4rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img{
      width: 2rem;
      height: 2rem;
      border-radius: .05rem;
    }
    span{
      line-height: .64rem;
      font-size: .32rem;
      color:#121212;
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

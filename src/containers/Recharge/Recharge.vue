<template>
    <div class="recharge">
      <yd-navbar class="header">
        <router-link to="/wallet" slot="left">
          <yd-navbar-back-icon color="#fff">返回</yd-navbar-back-icon>
        </router-link>
        <span slot="center">充值</span>
      </yd-navbar>
      <yd-tab>
        <yd-tab-panel label="线上充值" active>
          <ul class="pay-net">
            <li v-for="(item,index) in payList1" :key="index">
             <router-link  :to="{ path:`/moneypage/${index+1}`}">
               <img :src="item.img" alt="">
               <div class="pay-left">
                 <span>{{item.payWay}}</span>
               </div>
               <i class="iconfont icon-right"></i>
             </router-link>
            </li>
          </ul>
        </yd-tab-panel>
        <yd-tab-panel label="线下充值">
          <ul class="pay-net">
            <li v-for="(item,index) in payList2" :key="index">
              <router-link  :to="{ path:`/moneypagetwo/${index+1}`}">
                <img :src="item.img" alt="">
                <div class="pay-left">
                  <span>{{item.payWay}}<em v-if="item.desc">{{item.desc}}</em></span>
                </div>
                <i class="iconfont icon-right"></i>
              </router-link>
            </li>
          </ul>
        </yd-tab-panel>
      </yd-tab>
    </div>
</template>
<script>
  import img1 from "../../assets/zhifubao2.png";
  import img2 from "../../assets/weixin.png";
  import img3 from "../../assets/qqWallet.png";
  import img4 from "../../assets/yinlian2.png";
  export default {
        data() {
            return {
              input1:'',
              payList1:[
                {id:1,img:img4,payWay:"闪付快捷支付"},
                {id:2,img:img2,payWay:"可可微信扫码支付"},
                {id:3,img:img3,payWay:"可可QQ钱包宝扫码支付"}
              ],
              payList2:[
                {id:1,img:img2,payWay:"微信转银行",desc:"(充值限额:10.00~999999.00)"},
                {id:2,img:img4,payWay:"银联",desc:"(充值限额:10.00~999999.00)"},
                {id:3,img:img3,payWay:"QQ钱包",desc:""},
                {id:4,img:img2,payWay:"个人微信(王者28红包充值)",desc:"(充值限额:10.00~999999.00)"},
                {id:5,img:img1,payWay:"支付宝",desc:"(充值限额:10.00~999999.00)"},
                {id:6,img:img1,payWay:"支付宝转银行",desc:"(充值限额:10.00~999999.00)"}
              ]
            }
        },
        methods: {

        },
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
  .recharge{
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
    a{
      color:#fff!important;
    }
    span{
      font-size: .3rem;
      color:#ffec83;
    }
  }

.pay-net li a{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem .2rem;
  background: #fff;
  border-bottom: 1px solid #d7d7d7;
}
  .pay-net{
   img{
     width: .6rem;
     height: .6rem;
     vertical-align: middle;
     margin-right: .2rem;
   }
    .pay-left{
      flex:1;
      border: none;
    }
    span{
      font-size: .3rem;
      color:#242424;
      em{
        font-size: .2rem;
        color:#666;
      }
    }
  }
    .icon-right{
      font-size: .3rem;
      color:#242424;
    }
</style>

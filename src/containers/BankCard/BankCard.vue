<template>
    <div class="bank-card">
      <yd-navbar class="header">
        <div @click="back" slot="left">
          <yd-navbar-back-icon color="#fff">返回</yd-navbar-back-icon>
        </div>
        <span slot="center">银行卡管理</span>
      </yd-navbar>
      <div class="bankCard_manage_con">
        <div class="tit_img_card"></div>
        <!--<div class="tit_bind">未设置资金密码</div>-->
        <div class="info_card">添加银行卡</div>
        <div class="info_card">即可享受安全快捷的资金提现</div>
        <router-link to="/addcard"><p>+ 添加银行卡</p></router-link>
      </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {msg: 'hello'}
        },
        created() {
        },
        methods: {
          back(){
            this.$router.go(-1);
          }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
.bank-card{
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
.bankCard_manage_con {
  width: 100%;
  box-sizing: border-box;
  height: 80%;
  padding: 0 .2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tit_img_card {
  width: 2.37rem;
  height: 1.8rem;
  background: url('../../assets/pic_graybank@2x.png') no-repeat center;
  background-size: 100% 100%;
}
.info_card {
  line-height: .4rem;
  font-size: .28rem;
  color: rgba(72, 72, 76, 0.7);
  text-align: center;
}
.bankCard_manage_con a {
  display: inline-block;
  margin-top: .6rem;
  width: 100%;
  height: .88rem;
  line-height: .88rem;
  font-size: .32rem;
  color: rgba(72, 72, 76, 0.7);
  text-align: center;
  border-radius:.12rem;
  border: dashed 2px #cbcbcd;
}
</style>

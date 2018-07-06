<template>
    <div class="share">
      <yd-navbar class="header">
        <div @click="back" slot="left">
          <yd-navbar-back-icon color="#fff">返回</yd-navbar-back-icon>
        </div>
        <span slot="center">代理分享</span>
      </yd-navbar>
      <div class="shareWarp">
        <h3>推荐朋友<br>
          扫码下面的二维码</h3>
      </div>
      <div class="dl-share">
        <p>注册成为下线</p>
        <div class="shareErweima"><img src="../../assets/getcode.png"/></div>
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
  .shareErweima img {
    width: 2.4rem;
    height: 2.4rem;
    vertical-align: top;
  }
  .shareErweima {
    width: 2.58rem;
    height: 2.58rem;
    padding: .1rem;
    background: #caefff;
    margin: 0 auto;
  }
  .dl-share p {
    margin: .25rem .5rem;
    font-size: .3rem;
  }
.share{
  background: url('../../assets/fenxiangBG.png') center top no-repeat #fff;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
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
.shareWarp h3 {
  color: #3b74d9;
  text-align: center;
  padding-top: 20px;
  font-size: 40px;
}
</style>

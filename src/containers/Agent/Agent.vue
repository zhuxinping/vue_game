<template>
    <div class="agent">
      <yd-navbar class="header">
        <div @click="back" slot="left">
          <yd-navbar-back-icon color="#fff">返回</yd-navbar-back-icon>
        </div>
        <span slot="center">代理制度</span>
      </yd-navbar>
      <div class="content">
        <img src="../../assets/agent.png" alt="">
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
.agent{
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
  .content{
    width: 7.5rem;
    text-align: center;
    box-sizing: border-box;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>

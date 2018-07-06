<template>
    <div class="add-card">
      <yd-navbar class="header">
        <div @click="back" slot="left">
          <yd-navbar-back-icon color="#fff">返回</yd-navbar-back-icon>
        </div>
        <span slot="center">更改绑定方式</span>
      </yd-navbar>
      <div class="wordText">
        <router-link to="/bindcard">
          <div><img src="../../assets/yinlian1.png"></div>
        </router-link>
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
  .wordText {
    width: 100%;
    text-align: center;
    padding: .2rem 0;
    margin-top: .8rem;
    box-sizing: border-box;
    img{
      height: 2.6rem;
      border-radius: .2rem;
    }
  }
  .add-card{
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
</style>

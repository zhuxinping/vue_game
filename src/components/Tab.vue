<template>
  <nav>
    <router-link exact  to="/">
      <i class="iconfont icon-home"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/wallet" >
      <i class="iconfont icon-wallet"></i>
      <span>钱包</span>
    </router-link>
    <router-link to="/course" >
      <i class="iconfont icon-service"></i>
      <span>客服</span>
    </router-link>
    <router-link to="/profile" >
      <i class="iconfont icon-my"></i>
      <span>我的</span>
    </router-link>
  </nav>
</template>
<script>
    export default {
        data(){
            return {msg: 'hello'}
        },
        created(){
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
  nav{
    position: fixed;
    bottom:0px;
    width:100%;
    height:1rem;
    border-top:1px solid #d5d5d5;
    display:flex;
    a{
      flex:1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color:#b5b5b6;
      i.iconfont{
        font-size:24px;
      }
      &.active{
        color:#3a9be8;
      }
    }
  }
  .router-link-exact-active{
    color:red
  }
</style>

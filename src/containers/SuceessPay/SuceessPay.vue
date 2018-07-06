<template>
    <div class="pay">
       <div class="pay-in">
         <i class="iconfont icon-success"></i>
         <span>成功提现{{this.input}}元</span>
         <div class="pay-now" @click="finish">完成</div>
       </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {password:[],input:''}
        },
        created() {
        },
        methods: {
          finish(){
            this.$router.push('/')
          }
        },
      //每次进入路由之前都会执行这个钩子函数 然后获取数据 赋值给下一个组件
      beforeRouteEnter(to,from,next){
        let  {password,input}=to.query;
        console.log(password);
        next(vm=>{
          vm.password=password;
          vm.input=input;
        });
      },
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
.pay{
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  bottom:0;
  margin: auto;
  top: 0;
  background: #fff;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pay-in{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  span{
    font-size: .4rem;
    color:#333;
  }
}
  .icon-success{
    font-size: 1.8rem;
    color:#417ece;
  }
.pay-now{
  margin: .4rem auto 0 auto;
  width: 95%;
  height: .8rem;
  line-height: .8rem;
  text-align: center;
  font-size: .3rem;
  color:#fff;
  background:#417ece;
  border-radius: .05rem;
}
</style>

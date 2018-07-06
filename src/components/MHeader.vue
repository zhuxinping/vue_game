<template>
    <div class="header" ref="head">
      <slot></slot>
      <i class="iconfont icon-fanhui" @click="goBack" v-if="back"></i>
      <i @click="closeMask" class="iconfont icon-BackArrow" v-if="close"></i>
    </div>
</template>
<script>
    export default {
      props:{
          back:{
            type:Boolean,
            default:false
          },
        close:{
          type:Boolean,
          default:false
        }
      },

        methods: {
          goBack(){
            this.$router.go(-1);
          }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
.header{
  background: #d22727;
  height:40px;
  text-align: center;
  line-height: 40px;
  font-weight: bold;
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  color:#fff;
  i{
    position: absolute;
    left: 10px;
    font-size: 20px;
  }
  i.icon-BackArrow{
    position: absolute;
    left: 10px;
    font-size: 20px;
    color:#fff;
  }
}
</style>

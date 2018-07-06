<template>
    <div class="rebate">
      <mt-header fixed title="天天返利" class="login">
        <router-link to="/home" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="time-out">活动时间:到</div>
    </div>
</template>
<script>
    export default {
        data() {
            return {msg: 'hello'}
        },
        created() {
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
.rebate{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  z-index: 20;
  position: absolute;
  background-color: #FFF;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>

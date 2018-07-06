<template>
    <div class="details">
      <yd-navbar class="header">
      <div @click="back" slot="left">
        <yd-navbar-back-icon color="#fff">返回</yd-navbar-back-icon>
      </div>
      <span slot="center">公告详情</span>
      </yd-navbar>
      <div class="rebate">
        <h2>{{notice.title}}</h2>

        <p>{{notice.desc}}</p>
        <div class="rebateTime">
          <!--<span class="left">来源：叽叽歪歪</span>-->
          <span class="right">{{formatDated(notice.rateTime)}}</span>
        </div>
      </div>
    </div>
</template>
<script>
  import {formatDate} from "../../common/js/time";
    export default {
        data() {
            return {
              notice:{}
            }
        },
        created() {

        },
        methods: {
          formatDated(time){
            return formatDate(time);
          },
          back(){
            this.$router.go(-1);
          }
        },
      //每次进入路由之前都会执行这个钩子函数 然后获取数据 赋值给下一个组件
      beforeRouteEnter(to,from,next){
        let  {notice}=to.query;
        //console.log(notice);
        next(vm=>{
          vm.notice=notice;
        });
      },
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
.details{
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
.rebate {
  padding: .2rem .6rem 0;
  background: #fff;
  border-bottom: 1px solid #dedede;
  p{
    font-size: .28rem;
    line-height: .46rem;
  }
}
.rebate h2 {
  color: #404040;
  font-size: .32rem;
  font-weight: normal;
  line-height: .7rem;
  text-align: center;
}
.rebateTime {
  color: #484848;
  font-size: .24rem;
  line-height: .7rem;
  overflow: hidden;
  text-align: right;
}
</style>

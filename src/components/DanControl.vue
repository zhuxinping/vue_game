<template>
  <div>
    <div class="bottom-bar" v-show="downShow">
      <template v-if="count">
        <div class="bottom-bar-left">
          <div @click="upShow=!upShow" class="bar-img active"></div>
          <div class="tips-text active">
            <span class="sum">总计:{{sum}}</span>
            <span class="count">共:{{count}}</span>
          </div>
        </div>
        <div class="bottom-bar-right active">
          去下注
        </div>
      </template>
      <template v-if="!count">
        <div class="bottom-bar-left">
          <div class="bar-img"></div>
          <div class="tips-text cur">暂未下注</div>
        </div>
        <div class="bottom-bar-right">
          去下注
        </div>
      </template>
    </div>
    <!--弹窗列表begin-->
    <transition name="slide-right">
      <div class="mask-bar" v-show="upShow" @click="upShow=false">
        <div class="mask-list" @click.stop="">
          <div class="title-bar">
            <span>投注内容</span>
            <span @click="empty"> <i class="iconfont icon-del"></i>清空</span>
          </div>
          <ul>
            <li v-for="(item,index) in touList " :key="index">
              <span>{{item.title}}</span>
              <span>{{item.type}}<i v-for="(v,key) in item.text" :key="key">_{{v}}</i> </span>
              <span>{{item.inputNum}}</span>
              <i class="iconfont icon-minus" @click="minus(item)"></i>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <!--弹窗列表end-->
  </div>
</template>
<script>
  export default {
    props:{
      touList:{
        type:Array,
        default(){
          return [];
        }
      }
    },
    data() {
      return {
        upShow:false,
        downShow:false
      }
    },
    created() {
      this.$root.eventHub.$on('toggleShow',()=>{
        this.downShow=true;
      });
      this.$root.eventHub.$on('toggleHide',()=>{
        this.downShow=false;
      });


    },
    methods: {
      //清空投注单
      empty(){
        this.$root.eventHub.$emit('empty');
      },
      //删除某一个投注单子
      minus(item){
        this.$root.eventHub.$emit('minus',item);
      }
    },
    computed: {
      count(){
        return this.touList.length;
      },
      sum(){
        let all=0;
        this.touList.map(item=>{
          all+=parseInt(item.inputNum);
        })
        return all;
      }
    },
    components: {}
  }
</script>
<style scoped lang="less">
  .icon-minus{
    font-size: .3rem;
    color:#d22727;
  }
  .title-bar{
    overflow: hidden;
    height: .72rem;
    line-height: .72rem;
    font-size: .24rem;
    background-color: #f9f9f9;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .2rem;
    position: relative;
    .icon-del{
      font-size: .2rem;
      color:#999;
    }
  }
  .title-bar:after{
    content: '';
    position: absolute;
    height: .5rem;
    width: 2px;
    background: #d22727;
    left: 0;
    top: 50%;
    margin-top: -.25rem;
  }
  .mask-list{
    position: absolute;
    left: 0;
    bottom: 1rem;
    width: 100%;
    ul{
      background: #fff;
      padding-bottom: .6rem;
      height: 3rem;
      overflow: auto;
      li{
        padding-right: .2rem;
        height: .8rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        span{
          flex:1;
          text-align: center;
        }
      }
    }
  }
  .bottom-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    width: 100%;
    height: 1rem;
    background-color: #4d4c4b;
    .bottom-bar-left{
      height: 1rem;
      flex: 1;
      display: flex;
      align-items: center;
    }
    .bottom-bar-right{
      width: 2rem;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      font-size: .3rem;
      color:#fff;
      background-color: #797979;
      &.active{
        background:#d22727;
      }
    }
  }
  .tips-text{
    height: 1rem;
    flex: 1;
    font-size: .3rem;
    color:#fff;
    &.active{
      display: flex;
      flex-direction: column;
      justify-content: center;
      .sum{
        font-size: .3rem;
        color:#fff;
        font-weight: bold;
      }
      .count{
        font-size: .24rem;
        color: rgba(255, 255, 255, 0.5);
      }
    }
    &.cur{
      line-height: 1rem;
    }
  }
  .bar-img{
    width: 1rem;
    height: 1rem;
    margin: -.5rem .2rem 0 .2rem;
    border-radius: 50%;
    background-size: 100% 100%;
    display: inline-block;
    background: url('../assets/mbadge01_default@2x.png') center center no-repeat rgb(77, 76, 75);
    &.active{
      background: url('../assets/mbadge01@2x.png') center center no-repeat rgb(77, 76, 75);
    }
  }
  .mask-bar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    background: rgba(0,0,0,.3);
    z-index: 99;
    transform: translate3d(0,0,0);
    &.slide-right-enter-active, &.slide-right-leave-active{
      transition: all .5s ease;
    }
    &.slide-right-enter, &.slide-right-leave-to{
      transform: translate3d(0,100%,0);
    }
  }
</style>

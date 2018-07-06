<template>
  <div>
    <HomeHeader></HomeHeader>
    <div class="content"
         v-infinite-scroll="loadMore"
         :infinite-scroll-disabled="hasMore"
         infinite-scroll-distance="10"
        >
      <!--<div  ref="swiper" v-if="getSliders.length">
        <mt-swipe :auto="0">
          <mt-swipe-item style="text-align: center" v-for="(slider,index) in getSliders" :key="index">
            <img  :src="slider" @load="load" ref="oImg">
          </mt-swipe-item>
        </mt-swipe>
      </div>-->
     <div  ref="swiper" v-if="getSliders.length">
       <yd-slider autoplay="3000">
         <yd-slider-item  v-for="(slider,index) in getSliders" :key="index">
             <img  :src="slider" @load="load" ref="oImg">
         </yd-slider-item>
       </yd-slider>
     </div>
      <!--通告begin-->
      <div class="notice">
        <i class="share-sound"></i>
        <!--<div id="div1">
          <ul>
            <li v-for="(item,index) in notices" :key="index"><a href="#">{{item}}</a></li>
          </ul>
        </div>-->
        <yd-rollnotice style="flex:1;" autoplay="2000">
          <yd-rollnotice-item><span style="color:#F00;"> 公告 </span>荣耀V9 3月超级钜惠！</yd-rollnotice-item>
          <yd-rollnotice-item><span style="color:#F00;"> 公告 </span>3.23京东超级品牌日格力盛典</yd-rollnotice-item>
          <yd-rollnotice-item><span style="color:#F00;"> 公告 </span>京东服饰 早春新品低至7折</yd-rollnotice-item>
        </yd-rollnotice>
      </div>
      <!--通告end-->
      <!--注册用户begin-->
      <div class="statistics">
        <ul>
          <li><i class="totalmoney"></i><span>用户已赚 </span><em class="make_money">98098234</em>元宝</li>
          <li><i class="person"></i><span>注册人数 </span><em class="reg_number">99866</em>人</li>
        </ul>
        <div class="percent">

          <div class="per_number"><em id="d1" class="numberRun">{{animatedNumber}}</em>%</div>
          <span class="per_info">赚钱率</span>
        </div>
      </div>
      <!--注册用户end-->
      <div class="home-lessons"  >
        <div  class="lesson" v-for="(item,index) in pindaos" :key="index">
          <div @click="toRoom(index+1)">
            <img :src="item" alt="">
            <p @click.stop.prevent="select(index)">玩法说明</p>
          </div>
        </div>
        <div v-if="!hasMore" class="line">我是有底线的</div>
      </div>
    </div>
    <!--玩法说明弹窗begin-->
    <div class="mask" v-show="showFlag">
      <div class="header">
        玩法介绍
        <i @click="closeMask" class="iconfont icon-BackArrow"></i>
      </div>
      <ul>
        <li>
          <img v-show="active" :src="img" alt="">
        </li>
      </ul>
    </div>
    <!--玩法说明弹窗end-->
  </div>
</template>
<script>
  import HomeHeader from './HomeHeader.vue';
  import MHeader from '../../components/MHeader.vue';
  import {mapActions,mapGetters,mapMutations} from 'vuex';
  import a from '../../assets/way28.png';
  import b from '../../assets/way-Canada28.png';
  import c from '../../assets/way-pk10.jpg';
  import d from '../../assets/way-xyft.jpg';
  import pindao1 from '../../assets/pindao1.png';
  import pindao2 from '../../assets/pindao2.png';
  import pindao3 from '../../assets/pindao3.png';
  import pindao4 from '../../assets/pindao4.png';
  import * as Types from '../../store/mutation-types';
    export default {
        data(){
            return {
              msg: 'hello',
              imgs:[a,b,c,d],
              pindaos:[pindao1,pindao2,pindao3,pindao4],
              active:false,
              number: 0,
              img:'',
              tweenedNumber: 0,
              showFlag:false,
              //notices:['千万红包大放送，您还在等待吗?','紧急通知','尊敬的各位老板:平台新增热门彩种已经开售了','充值提醒','工作再忙也别忘了来住"幸运28"','现在的梦想,取一堆钱给您','幸运大转盘','当日首存，有礼活动']
            }
        },
        created(){
          this[Types.GET_SLIDERS]();
         // this.getRoomData();
        },
      mounted(){
        //this.Marquee();
        this.number=98;
      },
        methods: {
          ...mapMutations([Types.CHANGE_TYPE,Types.CLEAR_LESSONS]),
           ...mapActions([Types.GET_SLIDERS,Types.GET_LESSONS,Types.GET_ROOMS]),
           /* select(type){
              this[Types.CLEAR_LESSONS]();
              this[Types.CHANGE_TYPE](type);
              this[Types.GET_LESSONS]();
               // 选择的类型
            },*/
            loadMore(){
              this[Types.GET_LESSONS]();
            },
          getRoomData(){
              this[Types.GET_ROOMS]();
          },
          toRoom(id){
            this.$router.push({name:'room', query: {id:id}});
          },
          select(key){
              this.imgs.forEach((img,index)=>{
                if(index===key){
                  this.img=img
                  this.active=true;
                  this.showFlag=true;
                }
              })
          },
          closeMask(){
            this.active=false;
            this.showFlag=false;
          },
        /* Marquee() {
            this.$nextTick(()=>{
              var oDiv=document.getElementById('div1');
              var oUl=oDiv.getElementsByTagName('ul')[0];
              var aLi=oUl.getElementsByTagName('li');
              var speed=-4;
              oUl.innerHTML=oUl.innerHTML+oUl.innerHTML;
              oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
              function move() {
                if(oUl.offsetLeft<-oUl.offsetWidth/2){
                  oUl.style.left='0';
                }
                if(oUl.offsetLeft>0){
                  oUl.style.left=-oUl.offsetWidth/2+'px';
                }
                oUl.style.left=oUl.offsetLeft+speed+'px';
              }
              var timer=setInterval(move,100);
              oDiv.onmouseover=function () {
                clearInterval(timer);
              }
              oDiv.onmouseout=function () {
                timer=setInterval(move,100);
              }
            })
          },*/
            load(e){
                if(!this.loaded){
                  this.$nextTick(()=>{
                    this.$refs.swiper.style.height =this.$refs.oImg[0].offsetHeight + 'px';
                  });
                  this.loaded=true;
                }
            }
        },
        computed: {
          ...mapGetters(['getSliders','getLessons','hasMore','getRoom']),
          animatedNumber: function() {
            return this.tweenedNumber.toFixed(0);
          }
        },
      watch: {
        number: function(newValue) {
          TweenLite.to(this.$data, 2, { tweenedNumber: newValue });
        }
      },
        components: {HomeHeader,MHeader}
    }
</script>
<style scoped lang="less">

img{max-width: 100%;}
.content{
  position: fixed;
  top:1rem;
  bottom: 1rem;
  left:0;
  right:0;
  overflow-y: auto;
  overflow-x: hidden;
}
.home-lessons{
  width: 100%;
  padding: .1rem .15rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
  .lesson{
    border-radius: 5px;
    box-shadow: 1px 1px 2px 1px #c5c5c5,-1px -1px 2px 1px #c5c5c5;
    overflow: hidden;
    text-align: center;
    width: 49%;
    height: 2rem;
    margin: .1rem 0;
    position: relative;
    img{
      height:100%;
      border-radius: 5px 5px 0 0;
    }
    p{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: .1rem;
      width: 1.22rem;
      height: .4rem;
      line-height: .4rem;
      border-radius: .2rem;
      background-color: rgba(255, 255, 255, 0.3);
      font-size: 14px;
      color: #f0f0f0;
    }
  }
  .load-more{
    height:30px;
    line-height: 30px;
    border-radius: 5px;
    text-align: center;
    background-color: lightskyblue;
  }
  .line{
    width: 100%;
    text-align: center;
    line-height: 35px;
  }
}
.notice {
  width: 7.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:.8rem;
  line-height: .8rem;
  background: #ffffff;
  padding:0 .1rem;
  box-sizing: border-box;
}
.share-sound {
  background: url('../../assets/home_notice_icon@2x.png') no-repeat;
  background-size:100% 100% ;
  width: .44rem;
  height: .36rem;
  margin-right: .2rem;
}
#div1 {
  float: left;
  width: 6.9rem;
  height: .4rem;
  line-height: .4rem;
  position: relative;
  overflow: hidden;
}
  #div1 ul{
    position: absolute;
    left: 0;
    top: 0;
    height: .4rem;
    line-height: .4rem;
  }
#div1 ul li{
  float: left;
  width: 5rem;
}
#div1 ul li a{
  color:#333;
  font-size: 14px;
}
.statistics {
  width: 95%;
  border-radius: 20px;
  background-color: #ffffff;
  border: solid 2px #efefef;
  box-sizing: border-box;
  margin: .1rem auto;
}
.statistics ul {
  display: inline-block;
  margin-left:.2rem;
  box-sizing: border-box;
}
.statistics ul li i.totalmoney {
  background-image: url('../../assets/home_money_icon@2x.png');
}

.statistics ul li i {
  display: inline-block;
  vertical-align: middle;
  margin-right: .15rem;
  width: .6rem;
  height: .6rem;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: .6rem .6rem;
}
.statistics ul li em{
  font-style: normal;
  color:rgb(7,17,27);
}
.statistics ul li span {
  color: #bbb;
}
.percent {
  float: right;
  width: 1rem;
  margin-right: .2rem;
}
.percent .per_number {
  display: inline-block;
  width: 100%;
  text-align: center;
}

.per_number {
  font-size: .6rem;
  font-family: SimHei;
  color: #b1b1b1;
   background-image: linear-gradient(330deg, #d6596c, #f77f79 77%), linear-gradient(#eb301b, #eb301b);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
}
.percent span.per_info {
  display: inline-block;
  width: 100%;
  text-align: center;
}

.per_info {
  font-size: 14px;
  color: #b1b1b1;
}
.statistics ul li i.person {
  background-image: url('../../assets/home_register_icon@2x.png');
}
  .mask{
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    z-index: 999;
  }
.header{
  background: #d22727;
  height:1rem;
  text-align: center;
  line-height: 1rem;
  font-size: .3rem;
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  color:#fff;
  i{
    position: absolute;
    left: .2rem;
    font-size:.4rem;
  }
  i.icon-BackArrow{
    position: absolute;
    left: .2rem;
    font-size:.4rem;
    color:#fff;
  }
}
</style>

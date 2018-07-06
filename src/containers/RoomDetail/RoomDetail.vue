<template>
    <div class="roomDetail">
      <div class="header">
        <span slot="center">
          <yd-rollnotice style=" background: #d22727;color:#ffec83;">
          <yd-rollnotice-item style="color:#ffec83; background: #d22727;">{{title}}</yd-rollnotice-item>
          <yd-rollnotice-item style="color:#ffec83; background: #d22727;">玩法一:高赔率</yd-rollnotice-item>
        </yd-rollnotice>
        </span>
        <i @click.stop="back" style="color:#fff;" class="iconfont icon-BackArrow"></i>
      </div>
      <div>
      </div>
      <div class="roomHead">
        <div class="roomHead1">
          <ul>
            <li class="roomLi">
              <p>距离 <em id="issue" data-issue="882988">882988</em> 期截止</p>
              <p><span class="icoTime">已封盘</span></p>
              <div class="line"></div>
            </li>

            <li>
              <p class="money">余额</p>
              <p><i class="icon-money iconfont"></i><span class="icoAcer">0</span></p>
            </li>
          </ul>
        </div>
        <div class="roomHead2">
          <yd-accordion>
            <yd-accordion-item style=" background:#fff;" title="第882987期">
              <div slot="txt" style="margin-left: .1rem;">
                <div class="roomHead2">

        <span>
           <em class="num_l">07</em> + <em class="num_l">06</em> + <em class="num_l">01</em> = <em class="num_r bg_black">14</em><em style="color: #2aa7f6">(大双)</em>
        </span>
                  <em class="record_icon"></em>
                </div>
              </div>
              <div style="padding: .24rem;">
                <div class="roomHead2">

        <span>
          第<label id="issue2">677215</label>期
           <em class="num_l">07</em> + <em class="num_l">06</em> + <em class="num_l">01</em> = <em class="num_r bg_black">14</em><em style="color: #2aa7f6">(大双)</em>
        </span>
                  <em class="record_icon"></em>
                </div>
                <div class="roomHead2">

        <span>
          第<label id="issue2">677215</label>期
           <em class="num_l">07</em> + <em class="num_l">06</em> + <em class="num_l">01</em> = <em class="num_r bg_black">14</em><em style="color: #2aa7f6">(大双)</em>
        </span>
                  <em class="record_icon"></em>
                </div>
                <div class="roomHead2">

        <span>
          第<label id="issue2">677215</label>期
           <em class="num_l">07</em> + <em class="num_l">06</em> + <em class="num_l">01</em> = <em class="num_r bg_black">14</em><em style="color: #2aa7f6">(大双)</em>
        </span>
                  <em class="record_icon"></em>
                </div>
                <div class="roomHead2">

        <span>
          第<label id="issue2">677215</label>期
           <em class="num_l">07</em> + <em class="num_l">06</em> + <em class="num_l">01</em> = <em class="num_r bg_black">14</em><em style="color: #2aa7f6">(大双)</em>
        </span>
                  <em class="record_icon"></em>
                </div>
              </div>
            </yd-accordion-item>
          </yd-accordion>
        </div>
      </div>
      <div class="wrapper" id="data-list-content">
        <div class="userBetting">
        <dl class="left" data-issue="884027">
          <dt>
            <img src="../../assets/profile.png" alt=""/>
          </dt>
          <dd>
            <h3 style="text-align: left"><b>a***8</b><i class="level-1"></i></h3>
            <div class="bet-con"><div class="issueCon"><em></em><span>884027期</span></div>
              <p order-no="TZ20180423113336269126108">
                <label>投注类型：</label>
                <span>小双</span><label class="r">金额：<em>15</em>
                <i class="iconMoney"></i></label>
              </p>
            </div>
            <span class="timeRecord">2018-04-23 11:33</span>
          </dd>
        </dl>
      </div>
        <div class="userBetting">
          <dl class="left" data-issue="884027">
            <dt>
              <img src="../../assets/profile.png" alt=""/>
            </dt>
            <dd>
              <h3 style="text-align: left"><b>a***8</b><i class="level-1"></i></h3>
              <div class="bet-con"><div class="issueCon"><em></em><span>884027期</span></div>
                <p order-no="TZ20180423113336269126108">
                  <label>投注类型：</label>
                  <span>小双</span><label class="r">金额：<em>15</em>
                  <i class="iconMoney"></i></label>
                </p>
              </div>
              <span class="timeRecord">2018-04-23 11:33</span>
            </dd>
          </dl>
        </div>
        <div class="userBetting">
          <dl class="left" data-issue="884027">
            <dt>
              <img src="../../assets/profile.png" alt=""/>
            </dt>
            <dd>
              <h3 style="text-align: left"><b>a***8</b><i class="level-1"></i></h3>
              <div class="bet-con"><div class="issueCon"><em></em><span>884027期</span></div>
                <p order-no="TZ20180423113336269126108">
                  <label>投注类型：</label>
                  <span>小双</span><label class="r">金额：<em>15</em>
                  <i class="iconMoney"></i></label>
                </p>
              </div>
              <span class="timeRecord">2018-04-23 11:33</span>
            </dd>
          </dl>
        </div>
        <div class="userBetting">
          <dl class="left" data-issue="884027">
            <dt>
              <img src="../../assets/profile.png" alt=""/>
            </dt>
            <dd>
              <h3 style="text-align: left"><b>a***8</b><i class="level-1"></i></h3>
              <div class="bet-con"><div class="issueCon"><em></em><span>884027期</span></div>
                <p order-no="TZ20180423113336269126108">
                  <label>投注类型：</label>
                  <span>小双</span><label class="r">金额：<em>15</em>
                  <i class="iconMoney"></i></label>
                </p>
              </div>
              <span class="timeRecord">2018-04-23 11:33</span>
            </dd>
          </dl>
        </div>
        <div class="userBetting">
          <dl class="left" data-issue="884027">
            <dt>
              <img src="../../assets/profile.png" alt=""/>
            </dt>
            <dd>
              <h3 style="text-align: left"><b>a***8</b><i class="level-1"></i></h3>
              <div class="bet-con"><div class="issueCon"><em></em><span>884027期</span></div>
                <p order-no="TZ20180423113336269126108">
                  <label>投注类型：</label>
                  <span>小双</span><label class="r">金额：<em>15</em>
                  <i class="iconMoney"></i></label>
                </p>
              </div>
              <span class="timeRecord">2018-04-23 11:33</span>
            </dd>
          </dl>
        </div>
        <div class="message" v-for="(item,index) in arrText">
          <dl class="right" :key="index">
            <dt>
              <img src="../../assets/profile.png" alt="">
            </dt>
            <dd>
              <h3 data-v-08cf8018="" style="text-align: right;"><b data-v-08cf8018="">a***8</b><i data-v-08cf8018="" class="level-1"></i></h3>
              <div data-v-08cf8018="" class="bet-con">
                <p>{{item}}</p>
              </div>
            </dd>
          </dl>
        </div>
      </div>
      <div class="send">
        <em class="touzhu" @click="show">投注</em>
        <em class="zhuihao">追号</em>
        <input v-model="send" type="text">
        <button @click="sendMessage">发送</button>
      </div>

      <!--弹窗begin-->
      <transition name="slide-right">
        <div class="mask" v-show="hide" @click.stop="hideMask">
          <div class="mask-in"  @click.stop="">
            <ul class="tab-bar">
              <li  :class="{active:num==index}" @click="selectTab(index,tabCom[index])" v-for="(item,index) in tabList"  :key="index">{{item}}</li>
            </ul>
              <Current :toggleBar="toggleBar" :val="val" ref="list"  :is="currentTab"></Current>
            <!--输入投注金额-->
            <div class="jine" v-show="barShow">
              <input type="text" v-model="val">
              <button class="cancel" @click="getNo">取消</button>
              <button class="sure" @click="getDan">投注</button>
            </div>
            <!--投注单begin-->
            <div class="dan">
              <DanControl  ref="control" :touList="touList" ></DanControl>
            </div>
            <!--投注单end-->
          </div>
        </div>
      </transition>
      <!--弹窗end-->
    </div>
</template>
<script>
    import io from 'socket.io-client';
    let socket=io("ws://localhost:4000");
    import Current from '../../components/Current.vue';
    import Che from '../../components/Che.vue';
    import Hu from '../../components/Hu.vue';
    import Xian from '../../components/Xian.vue';
    import Ya from '../../components/Ya.vue';
    import He from '../../components/He.vue';
    import DanControl from '../../components/DanControl.vue';
    export default {
        data() {
            return {
              title:'',
              roomId:'',
              send:'',
              arrText:['121','122','123'],
              hide:false,
              tabList:["猜双面","猜车号","猜龙虎","猜庄闲","猜冠亚","猜冠和"],
              tabCom:["Current","Che","Hu","Xian","Ya","He"],
              currentTab:'Current',
              num:0,
              val:'',
              touList:[],
              barShow:false,
            }
        },
      updated(){
        this.bottomBar();
      },
        created() {
          this.bottomBar();
          socket.on('recvmsg', (data)=>{
            this.arrText.push(data);
            this.send='';
          });
         //删除某一项
          this.$root.eventHub.$on('minus',(item)=>{
            this.touList=this.touList.filter(v=>{return v!=item})
           // console.log(item);
          });
          this.$root.eventHub.$on('send',(arr)=>{
           // console.log(arr);
            //先转化为字符串
            let arr1=JSON.stringify(arr);
            //在转化为原来的数组对象这样就改变数组对象的引用地址了
            let arr2=JSON.parse(arr1);
            this.touList=[...this.touList,...arr2]
            //console.log(this.touList);
          });
          this.$root.eventHub.$on('empty',()=>{
            this.$dialog.confirm({
              title: '是否清空',
              opts: () => {
                this.touList=[];
              }
            });
          });
        },
        methods: {
          back(){
            this.$router.go(-1);
          },
          //发送消息给后端
          sendMessage(){
            socket.emit("sendmsg", this.send);
          },
          bottomBar(){
            this.$nextTick(() => {
              var div = document.getElementById('data-list-content');
              div.scrollTop = div.scrollHeight;
            })
          },
          //隐藏遮罩层
          hideMask(){
            this.hide=false;
          },
          //显示弹窗
          show(){
            this.hide=true;
          },
          toggleBar(){
            this.barShow=true;
          },
          //切换选项卡
          selectTab(index,com){
            this.currentTab=com;
            this.num=index;
            //每次切换选项卡都要初始化投注的单子为空
            //this.touList=[];
          },
          //获取投注
          getDan(){
            if(!this.val){
              this.$dialog.alert({mes: "输入金额不能为空!"});
              return;
            }
            this.$refs.list.sendList();
            this.$root.eventHub.$emit('toggleShow');
            this.getNo();
            this.barShow=false;
          },
          getNo(){
             this.val='';
             this.$refs.list.resetVal();
            this.barShow=false;
          }
        },
        computed: {

        },
        components: {
          Current,
          Che,
          Hu,
          Xian,
          Ya,
          He,
          DanControl
        }
    }
</script>
<style scoped lang="less">
  .dan{

  }
  .cancel{
    background-color: #999;
  }
  .sure{
    background-color: #d22727;

  }
  .jine{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 1rem;
    background: #f1f1f1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 .1rem;
    input{
      flex:1;
      height: .6rem;
      line-height: .6rem;
      border: none;
      background: #fff;
      text-indent: 1em;
      border-radius: .05rem;
      margin-right: .1rem;
    }
    button{
      width:1rem;
      height:.6rem;
      font-size: .28rem;
      border-radius: 3px;
      margin-left:.1rem;
      color:#fff;
      border: none;
    }
  }
.tab-bar{
  width: 2rem;
  background: #f1f1f1;
  li{
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    position: relative;
  }
  li.active{
    background: #fff;
  }
  li.active:after{
    position: absolute;
    content: '';
    width: 2px;
    height: .8rem;
    background: #d22727;
    left: 0;
    top: 50%;
    transform: translate(0,-50%);
  }
}
.tab-content{
  flex:1;
}
  .mask{
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 93%;
    background: rgba(0,0,0,.1);
    z-index: 10;
    transform: translate3d(0,0,0);
    &.slide-right-enter-active, &.slide-right-leave-active{
      transition: all .5s ease;
    }
    &.slide-right-enter, &.slide-right-leave-to{
      transform: translate3d(0,100%,0);
    }
    .mask-in{
      display: flex;
      width: 100%;
      height: 80%;
      position: absolute;
      left: 50%;
      bottom: 0;
      background: #fff;
      transform: translate(-50%,0);
      z-index: 999;
      .title{
        height: .8rem;
        line-height: .8rem;
        text-align: center;
        font-size: .4rem;
        color:#333;
        border-bottom: 1px solid #666;
      }
      p{
        padding: .3rem;
        line-height: .32rem;
        overflow: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #000;
        text-align: left;
      }
      .btn{
        margin: 0 auto;
        width: 100%;
        height: .8rem;
        line-height: .8rem;
        text-align: center;
        font-size: .36rem;
        color: #fff;
        border-radius: 4px;
        background-image: -moz-linear-gradient(to top, #f04a49, #f36d5c);
        background-image: -webkit-linear-gradient(to top, #f04a49, #f36d5c);
        background-image: linear-gradient(to top, #f04a49, #f36d5c);
      }
    }
  }
  .send{
    position: fixed;
    height: 1rem;
    line-height: 1rem;
    bottom: 0;
    z-index: 10;
    width: 100%;
    display: flex;
    align-items: center;
    background: #f7f6f8;
    padding: .08rem .06rem;
    box-sizing: border-box;
    .touzhu ,.zhuihao{
      width: 1.3rem;
      height: .8rem;
      line-height: .8rem;
      border-radius: .02rem;
      display: block;
      font-size: .28rem;
      margin-right: .2rem;
      color:#fff;
      text-align: center;
    }
    button{
      width: 1.3rem;
      height: .8rem;
      line-height: .8rem;
      border-radius: .02rem;
      display: block;
      font-size: .28rem;
      margin-right: .2rem;
      color:#fff;
      text-align: center;
      background: #ff6179;
      border: none;
    }
    .touzhu{
      background: #ff6179;
    }
    .zhuihao{
      background: #61b7ff;
    }
    input{
      text-indent: 1em;
      flex:1;
      height: .8rem;
      line-height: .8rem;
      border-radius: .02rem;
      border: none;
      border: 1px solid #cfcfcf;
    }
  }
  .message{
    margin-bottom: .15rem;
    overflow: hidden;
    dl{
      dt{
        width: 1rem;
        float: right;
        img{
          width: .9rem;
          height: .9rem;
          border-radius: 50%;
        }
      }
      dd{
        float: left;
        /*min-width: 5rem;*/
        min-height: 1rem;
        padding-bottom: .2rem;
        float: left;
        margin-right: .18rem;
        border-radius: .058rem;
        text-align: center;
        padding-top: .08rem;
        line-height: .44rem;
        position: relative;
        background: #f2f2f2;
        .bet-con{
          position: relative;
          /*width: 5rem;*/
          padding: 0 8px;
          background-image: linear-gradient(150deg, #ffffff, #e8e8e8 95%);
          border-radius: 3px;
          -webkit-box-shadow: 0.5px 0.9px 4px 0 rgba(35, 24, 21, 0.27), inset 0px -2px 0 0 #e2e2e2, inset 0px 2px 0 0 #ffffff;
          box-shadow: 0.5px 0.9px 4px 0 rgba(35, 24, 21, 0.27), inset 0px -2px 0 0 #e2e2e2, inset 0px 2px 0 0 #ffffff;
          p{
            padding-left: .18rem;
            font-size: .24rem;
            color: #6e6e6e;
            line-height: .6rem;
            text-align: left;
            /*border-top: 1px solid #cacaca;*/
          }
        }
        .bet-con:after{
          position: absolute;
          width: 0;
          height: 0;
          content: "";
          border: 5px solid transparent;
          top: .3rem;
          margin-top: -0.1rem;
          right: -10px;
          border-left: .1rem solid #fff;
        }
      h3{
        text-align: center;
        padding: .1rem 0;
        line-height: .44rem;
        font-size: .24rem;
        font-weight: normal;
        overflow: hidden;
        b{
          float: right;
          vertical-align: middle;
          font-weight: normal;
        }
      }
        h3 i.level-1[data-v-08cf8018] {
          background: url('../../assets/slevel01.png') no-repeat center;
        }
      }
    }
  }
  .right{
    float: right;
  }
  .wrapper{
    overflow: auto;
    height: 9rem;
    padding: 15px;
    background: #F2F2F2;
  }
  .userBetting {
    margin-bottom: .15rem;
    overflow: hidden;
  }
  .left {
    float: left;
  }
  .userBetting dt {
    margin-top: .2rem;
  }

  .userBetting dt, .userBetting li:first-child {
    width:1rem;
    float: left;
    overflow: hidden;
  }
  .userBetting dt img, .userBetting li:first-child img {
    width: .9rem;
    height: .9rem;
    border-radius: 50%;
  }
  .userBetting dd {
    min-width: 5rem;
    min-height: 1rem;
    padding-bottom: .2rem;
    float: left;
    margin-left: .18rem;
    border-radius: .058rem;
    text-align: center;
    padding-top: .08rem;
    line-height:.44rem;
    position: relative;
    background: #f2f2f2;
  }
  img {
    vertical-align: top;
  }
  h3 i.level-1 {
    background: url('../../assets/slevel01.png') no-repeat center;
  }

  h3 i {
    display: inline-block;
    margin-left: 2px;
    vertical-align: top;
    width: 50px;
    height: 18px;
    background-size: 50px 18px!important;
  }
  .userBetting h3 {
    text-align: center;
    padding: .1rem 0;
    line-height: .44rem;
    font-size: .24rem;
    font-weight: normal;
    overflow: hidden;
  }
  .userBetting h3 b {
    vertical-align: middle;
    font-weight: normal;
  }
  .userBetting dd .bet-con {
    position: relative;
    padding: 0 8px;
    background-image: linear-gradient(150deg, #ffffff, #e8e8e8 95%);
    border-radius: 3px;
    box-shadow: 0.5px 0.9px 4px 0 rgba(35, 24, 21, 0.27), inset 0px -2px 0 0 #e2e2e2, inset 0px 2px 0 0 #ffffff;
  }
  .userBetting dd .bet-con div.issueCon {
    position: relative;
    color: #6e6e6e;
    line-height: .6rem;
    width: 100%;
    padding: 0 9px;
    text-align: left;
  }
  .userBetting dd .bet-con div.issueCon em {
    display: inline-block;
    margin-right:.17rem;
    width: .32rem;
    height: .32rem;
    background: url('../../assets/clock_icon_black@2x.png') no-repeat center;
    background-size:.32rem .32rem;
  }

  .issueCon em, .issueCon span {
    vertical-align: middle;
  }
  .userBetting dd .bet-con p:nth-of-type(1) {
    border-top: none;
  }

  .userBetting dd .bet-con p {
    padding-left: .18rem;
    font-size: .24rem;
    color: #6e6e6e;
    line-height: 30px;
    text-align: left;
    border-top: 1px solid #cacaca;
  }
  .userBetting dd .bet-con p span {
    color: #d22727;
  }
  .userBetting dd .bet-con p .r {
    float: right;
    color: #48484c;
  }
  .userBetting dd .bet-con p .r em {
    color: #d22727;
  }
  i.iconMoney {
    display: inline-block;
    width: .3rem;
    height: .3rem;
    padding-right: 0;
    background: url('../../assets/balance_icon@2x.png') no-repeat center center;
    background-size: .3rem .3rem;
    margin: 0 .2rem
  }
  .userBetting .bet-con i.mask, .userBetting .bet-con-self i.mask {
    width: 100%;
    height: 100%;
    display: none;
    background: url('../../assets/close.png') no-repeat center rgba(0,0,0,0.7);
    position: absolute;
    left: 0;
    top: 0;
    background-size: .4rem auto;
    border-radius:.06rem;
  }
  .userBetting .left dd .bet-con:after {
    position: absolute;
    width: 0;
    height: 0;
    content: "";
    border: 5px solid transparent;
    top:.3rem;
    margin-top: -.1rem;
    left: -10px;
    border-right: .1rem solid #fff;
  }
  .userBetting .timeRecord {
    display: inline-block;
    margin-top: .2rem;
    width: 2.76rem;
    height: .38rem;
    line-height: .38rem;
    font-family: monospace;
    font-size: .24rem;
    color: #fff;
    border-radius: .08rem;
    background-color: #d6d6d6;
    text-align: center;
  }
  .roomHead2 span label {
    color: #2aa7f6;
  }
  .roomHead2 span{
    font-size: .28rem;
  }
  .roomHead2 {
    margin: .2rem 0;
    font-size: .28rem;
    color: #242424;
  }

  em.num_l {
    width: .4rem;
    height: .4rem;
    line-height: .4rem;
    border-radius: 50%;
    font-size: .24rem;
    text-align: center;
    color: #2aa7f6;
    border: solid 1px #2aa7f6;
  }
  .roomHead2 > span em:nth-of-type(1) {
    margin-left: .1rem;
  }
  .roomHead2 em {
    display: inline-block;
  }
  .bg_black {
    background-color: black;
  }
  em.num_r {
    width: .4rem;
    height: .4rem;
    line-height: .4rem;
    border-radius: 50%;
    font-size:.24rem;
    text-align: center;
    color: #fff!important;
    margin: 0 .1rem;
  }
  .roomHead1{
    height: 1.2rem;
    ul{
      height: 1.2rem;
    }
  }
  .roomHead1 li {
    width: 50%;
    text-align: center;
    float: left;
    height: 1.2rem;
    padding: .1rem;
    background: #fff;
    border-bottom: 1px solid #e4e4e4;
  }
  .roomHead1 li .line {
    position: absolute;
    right: -1px;
    top: .2rem;
    width: 1px;
    height: .6rem;
    background-color: #e4e4e4;
  }
  .roomHead1 li:first-child {
    position: relative;
  }
  .roomHead1 li p:nth-child(1) {
    font-size: .24rem;
    color: #909090;
    line-height: .44rem;
  }
  .roomHead1 li p:nth-child(2) {
    font-size: .36rem;
    color: #48484c;
  }
  .roomHead1 #issue {
    color: #2aa7f6;
  }
  .roomHead {
    background: #fff;
    z-index: 3;
    width: 100%;
  }
.roomDetail{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: #f5f5f5;
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
  display: flex;
  justify-content: center;
  align-items: center;
  span{
    background: #d22727;
  }
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
  i.icon-money{
    color:#ffec83;
    font-size: .24rem;
  }
}
</style>

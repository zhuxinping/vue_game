<template>
    <div class="room-wrapper">
      <div class="header">
        {{room.title}}
        <i @click.stop.prevent="back" class="iconfont icon-BackArrow"></i>
      </div>
      <ul class="room-list">
        <li class="room" v-for="(item,index) in room.desc" :class="classMap[item.type]" @click="RoomIn(item.roomId)" :key="index">
          <span @click.stop.prevent="show"  class="oddDesc">{{item.oddDesc}}</span>
        </li>
      </ul>
      <!--赔率说明弹窗begin-->
      <transition name="slide-right">
        <div class="mask" v-show="hide">
          <div class="mask-in">
            <div class="title">赔率说明</div>
            <p>1.大小单双赔率2倍<br>2.组合(小单|大双)4.6倍；<br>3.组合（小双|大单）4.2倍;<br>4.开13/14,总注小于等于10000时,大小单双赔率1.5倍,组合赔率1倍。<br>5.开13/14,总注大于10000时,大小单双赔率1倍,组合赔率1倍。<br>以上赔率均含本金。<br><br>回水说明 ：<br>当日亏损100-5000         回水1%<br>当日亏损5001-50000     回水2%<br>当日亏损50001-无上限   回水3%<br><br>回水限制：大小单双 四种玩法的投注额度超过投注总额的75%，则不享受此优惠</p>
            <div class="btn" @click.stop.prevent="hideMask">确定</div>
          </div>
        </div>
      </transition>
      <!--赔率说明弹窗end-->
    </div>
</template>

<script>
  import {getRooms} from '../../api'
  import {urlParse} from '../../common/js/urlParse'
    export default {
        data() {
            return {
              room: {},
              hide:false
            }
        },
        created() {
          this.getRoom();

          this.classMap=['room1','room2','room3','room4','room5','room6','room7','room8','room9','room10','boat1','boat2','boat3','boat4'];
        },
      watch:{
        $route(){
          this.getRoom();//只要路径变化 重新获取数据
        },
      },
        methods: {
          RoomIn(roomId){
            this.$router.push({name:'roomDetail', query: {roomId:roomId,title:this.room.title}});
          },
          back(){
            this.$router.go(-1);
          },
          show(){
            this.hide=true;
          },
          hideMask(){
            this.hide=false;
          },
          async getRoom(){
            let id=this.$route.query.id;
            //console.log(id);
           if(id){
             let room =await getRooms(id);
             this.room=room;
            // console.log(this.room.title)
           }
          }
        },
        computed: {

        },
        components: {}
    }
</script>
<style scoped lang="less">
  .room-wrapper{
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 998;
    background: #fff;
  }
  .header{
    background: #d22727;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
   font-size: .3rem;
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    color:#ffec83;
    i{
      position: absolute;
      left: .2rem;
      font-size: .3rem;
    }
    i.icon-BackArrow{
      position: absolute;
      left: .2rem;
      font-size: .3rem;
      color:#fff;
    }
  }
.room{
    width: 95%;
    height: 4.2rem;
    margin:2.5% auto;
    position: relative;
  .oddDesc{
    position: absolute;
    left: .2rem;
    top: .2rem;
    width: 2.4rem;
    text-align: center;
    height: .6rem;
    line-height: .6rem;
    border-radius: 1.3rem;
    background-color: rgba(0, 0, 0, 0.3);
    font-size:.28rem;
    color: #f0f0f0;
  }
  }
.room1{
   background: url('../../assets/room1.png') no-repeat;
   background-size: 100% 100%;
 }
.room2{
  background: url('../../assets/room2.png') no-repeat;
  background-size: 100% 100%;
}
.room3{
  background: url('../../assets/room3.png') no-repeat;
  background-size: 100% 100%;
}
.room4{
  background: url('../../assets/room4.png') no-repeat;
  background-size: 100% 100%;
}
.room5{
  background: url('../../assets/room5.png') no-repeat;
  background-size: 100% 100%;
}
.room6{
  background: url('../../assets/room6.png') no-repeat;
  background-size: 100% 100%;
}
.room7{
  background: url('../../assets/room7.png') no-repeat;
  background-size: 100% 100%;
}
.room8{
  background: url('../../assets/room8.png') no-repeat;
  background-size: 100% 100%;
}
.room9{
  background: url('../../assets/room9.png') no-repeat;
  background-size: 100% 100%;
}
.room10{
  background: url('../../assets/room10.png') no-repeat;
  background-size: 100% 100%;
}
.boat1{
   background: url('../../assets/boat1.png') no-repeat;
   background-size: 100% 100%;
 }
.boat2{
  background: url('../../assets/boat2.png') no-repeat;
  background-size: 100% 100%;
}
.boat3{
  background: url('../../assets/boat3.png') no-repeat;
  background-size: 100% 100%;
}
.boat4{
  background: url('../../assets/boat4.png') no-repeat;
  background-size: 100% 100%;
}
  .mask{
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.7);
    z-index: 999;
    transform: translate3d(0,0,0);
    &.slide-right-enter-active, &.slide-right-leave-active{
      transition: all .5s ease;
    }
    &.slide-right-enter, &.slide-right-leave-to{
      transform: translate3d(100%,0,0);
    }
    .mask-in{
      width: 300px;
      position: absolute;
      left: 50%;
      top: 50%;
      background: #fff;
      transform: translate(-50%,-50%);
      border-radius: 5px;
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
</style>

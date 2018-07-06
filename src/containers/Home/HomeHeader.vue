<template>
  <div class="home-header">
    <div class="home-logo">
      <img src='../../assets/logo.png'/>
      <div @click="toggle">
        <i @click="goNotice" class="iconfont icon-i-message"></i>
        <i class="iconfont icon-guanbi" v-show="showList"></i><i class="iconfont icon-uilist" v-show="!showList"></i>
      </div>
    </div>
    <!--<transition name="fade">
      <ul class="menu-list" v-show="showList" @click="selectMenu">
        <li data-type="">立即充值</li>
        <li data-type="react">我要提现</li>
        <li data-type="vue">天天返利</li>
      </ul>
    </transition>-->
    <transition name="fade">
      <ul class="menu-list" v-show="showList" @click="selectMenu">
        <router-link to="/recharge"><li class="icoRecharge" data-type="">立即充值</li></router-link>
        <router-link to='/withdraw'><li class="icoWithdraw" data-type="react">我要提现</li></router-link>
        <router-link to='/rebate'><li class="icoRebate" data-type="vue">天天返利</li></router-link>
      </ul>
    </transition>
  </div>
</template>
<script>
    export default {
        data(){
            return {showList: false}
        },
        created(){
        },
        methods: {
          toggle(){
              this.showList = !this.showList
          },
          goNotice(){
            this.$router.push('/notice')
          },
          selectMenu(e){
              //this.$emit('selectMenu',e.target.dataset.type);
              this.toggle()
          }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
  .icon-i-message{
    font-size: .4rem;
    color:#f90;
    margin-right: .2rem;
  }
  .home-header{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    z-index: 10;
    .home-logo{
      height:1rem;
      background-color: #d22727;
      width:100%;
      display:flex;
      justify-content: space-between;
      align-items: center;
      img{
        width: .8rem;
        height:.8rem;
        margin-left:.15rem;
      }
      div{
        color:#FFF;
        margin-right:.15rem;
      }
    }
    .menu-list{
      position: absolute;
      right:0;
      top:1rem;
      width:60%;
      background-color: #fff;
      li{
        height: .7rem;
        line-height: .7rem;
        border-bottom: 1px solid #d2d2d2;
        color: #48484c;
        font-size: .24rem;
        padding-left: 1.4rem;
        background-repeat: no-repeat;
        background-position: .4rem center;
        box-shadow: 1px 1px 8px #ccc;
        a{
          color: #48484c;
        }
        &.active{
          color:green;
        }
      }
    }
    .icoRecharge {
      background-image: url('../../assets/index_chongzhi_icon@2x.png');
      background-size: .5rem .5rem;
    }
    .icoWithdraw {
      background-image: url('../../assets/index_tixian_icon@2x.png');
      background-size: .5rem .5rem;
    }
    .icoRebate {
      background-image: url('../../assets/index_act1_icon@2x.png');
      background-size: .5rem .5rem;
    }

  }
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: .3s linear;
  }
  .fade-leave-active{
    transition: .3s linear;
    opacity: 0;
  }
  .icon-uilist,.icon-guanbi{
    font-size: .4rem;
  }
</style>

<template>
  <div class="profile">
    <yd-navbar class="header">
      <span slot="center">个人中心</span>
      <router-link to="about" slot="right">
        设置
      </router-link>
    </yd-navbar>
    <div class="profile-bg">
      <img src="../../assets/profile.png"/>
      <div>
        <a v-if="getUser">{{getUser}}</a>
        <router-link to="/login" v-else>登录</router-link>
        <router-link to="/edit"><i class="iconfont icon-edit"></i> 编辑个人资料</router-link>
      </div>
    </div>
    <ul class="cash">
      <router-link to="/wallet"><li class="icoWallet"><span>钱包</span> <i class="iconfont icon-right"></i></li></router-link>
      <router-link to='/agent'><li class="iconAgent"><span>代理制度</span> <i class="iconfont icon-right"></i></li></router-link>
    </ul>
    <ul class="cash">
      <router-link to='/share'><li class="iconShare"><span>代理分享</span> <em><img style="width: 30px" src="../../assets/person_ercode_icon@2x.png" alt=""><i class="iconfont icon-right"></i></em></li></router-link>
    </ul>
    <ul class="cash">
      <router-link to='/noterecord'><li class="icoRecord"><span>投注记录</span> <i class="iconfont icon-right"></i></li></router-link>
      <router-link to='/withdraw'><li class="icoTeam"><span>团队管理</span> <i class="iconfont icon-right"></i></li></router-link>
    </ul>
    <ul class="cash">
      <router-link to='/withdraw'><li class="icoActivity"><span>活动中心</span> <em>好礼等您拿<i class="iconfont icon-right"></i></em></li></router-link>
    </ul>
    <ul class="cash">
      <router-link to='/withdraw'><li class="icolucky"><span>幸运大转盘</span> <i class="iconfont icon-right"></i></li></router-link>
    </ul>
  </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex';
  import * as Types from '../../store/mutation-types'
    export default {
        data(){
            return {}
        },
        created(){

        },
        methods: {
         /* ...mapActions([Types.LOGOUT]),
          openConfrim() {
            if(this.$store.getters.getUser){
              this.$dialog.confirm({
                title: '是否退出',
                opts: () => {
                  this.quite();
                  this.$router.push('/login');
                }
              });
            }
          },
          quite(){
              // 退出
             this[Types.LOGOUT]();

          },*/
          back(){
            this.$router.go(-1);
          }
        },
        computed: {
          ...mapGetters(['getUser'])
        },
        components: {}
    }
</script>
<style scoped lang="less">
  .cash{
    margin-bottom: .2rem;
    background: #fff;
    li{
      display: flex;
      height: 1rem;
      line-height: 1rem;
      border-bottom: 1px solid #d2d2d2;
      color: #48484c;
      font-size: .24rem;
      padding-left: 1.4rem;
      background-repeat: no-repeat;
      background-position: .4rem center;
      padding-right: .2rem;
      em{
        display: flex;
        align-items: center;
      }
      a{
        color: #48484c;
      }
      &.active{
        color:green;
      }
      span{
        flex: 1;
        font-size: .3rem;
        color:#242424;
      }
    }
  }
  .icoWallet {
    background-image: url('../../assets/person_wallet_icon@2x.png');
    background-size: .5rem .5rem;
  }
  .iconAgent {
    background-image: url('../../assets/person_agency_icon@2x.png');
    background-size: .5rem .5rem;
  }
  .iconShare {
    background-image: url('../../assets/person_share_icon@2x.png');
    background-size: .5rem .5rem;
  }
  .icoRecord {
     background-image: url('../../assets/person_tzrecord_icon@2x.png');
     background-size: .5rem .5rem;
   }
  .icoTeam {
    background-image: url('../../assets/person_teammanage_icon@2x.png');
    background-size: .5rem .5rem;
  }
  .icoActivity {
    background-image: url('../../assets/index_act1_icon@2x.png');
    background-size: .5rem .5rem;
  }
  .icolucky {
    background-image: url('../../assets/person_luckyturn_icon@2x.png');
    background-size: .5rem .5rem;
  }
  .icon-edit{
    color:#fff;
    font-size: .3rem;
  }
  .header{
    background: #d22727!important;
    border-bottom: 1px solid #ffec83;
    span{
      font-size: .3rem;
      color:#ffec83;
    }
    a{
      color: #ffffff !important;
    }
  }
  .profile {
    .profile-bg {
      background:#d22727;
      background-size: contain;
      width: 100%;
      height:3.2rem;
      display: flex;
      padding: 0 .4rem;
      box-sizing: border-box;
      align-items: center;
      img {
        width: 1.2rem;
        height:1.2rem;
        border-radius: 50%;
      }
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: .4rem;
        background-color: #d22727;
        color: #fff;
        height: .5rem;
        border-radius: .1rem;
        text-align: center;
        line-height: .5rem;
        margin-top: .16rem;
        a{
          font-size: .28rem;
          color:#fff;
        }
      }
    }
  }
</style>

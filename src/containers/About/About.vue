<template>
    <div class="about-wrapper">
      <yd-navbar class="header">
        <router-link to="/profile" slot="left">
          返回
        </router-link>
      </yd-navbar>
      <div class="about" @click.stop.prevent="openMask">
        <div class="about-left">关于我们</div>
        <div class="about-right">
          <span>v4.0.0</span>
          <i class="iconfont icon-right"></i>
        </div>
      </div>
      <div  @click="openConfrim" class="out" v-if="this.$store.getters.getUser">退出登录</div>
      <div class="about-mask" v-show="flag">
        <yd-navbar class="header">
          <span @click.stop.prevent="closeMask" slot="left">
            返回
          </span>
        </yd-navbar>
       <div class="mask-in">
         <div class="logo"><img src="../../assets/android-template@2x.png" alt=""></div>
         <p class="name">万华28</p>
         <p class="banben">版本号:v4.0.0</p>
       </div>
      </div>
    </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex';
  import * as Types from '../../store/mutation-types'
    export default {
        data() {
            return {
              flag:false
            }
        },
        created() {
        },
        methods: {
          ...mapActions([Types.LOGOUT]),
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

          },
          quite(){
            // 退出登录
            this[Types.LOGOUT]()
          },
          back(){
            this.$router.go(-1);
          },
          openMask(){
            this.flag=true;
          },
          closeMask(){
            this.flag=false;
          }
        },
        computed: {
          ...mapGetters(['getUser'])
        },
        components: {}
    }
</script>
<style scoped lang="less">
  .header{
    background: #d22727!important;
    border-bottom: 1px solid #ffec83;
    span,a{
      color: #ffffff !important;
    }
  }

  .out{
    width: 100%;
    height:.8rem;
    line-height: .8rem;
    text-align: center;
    background: #fff;
    font-size: .3rem;
    color:#666;
    margin-top: .1rem;
  }
  .about-mask{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    z-index: 99;
    background: #f5f5f5;
    width: 100%;
    height: 100%;
    .mask-in{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .logo{
      width: 192px;
      height: 192px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .name{
      font-size: 24px;
      color:#999999;
      margin: 10px 0 20px 0;
    }
    .banben{
      font-size: 14px;
      color:#999999;
    }
  }
  .about-wrapper{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    position: absolute;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
  }

  .about{
    height: .8rem;
    line-height: .8rem;
    display: flex;
    justify-content: space-between;
    background: #fff;
    border-bottom: 1px solid #dedede;
    padding: 0 10px;
    .about-left{
      font-size:20px;
      color:#242424;
    }
    .about-right{
      font-size:16px;
      color:#9f9f9f;
    }
  }
</style>

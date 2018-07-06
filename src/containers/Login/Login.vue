<template>
  <div class="login-panel">
    <mt-header fixed title="登录" class="login">
      <router-link to="/profile" slot="left">
        <mt-button @click="back" icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="login-logo">
      <img src="../../assets/profile.png" alt=""/>
    </div>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">用户名：</span>
        <yd-input slot="right" required v-model="username" max="20" placeholder="请输入用户名"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">密码：</span>
        <yd-input slot="right" type="password" v-model="password" placeholder="请输入密码"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <router-link to="/reg">前往注册</router-link>
    <mt-button @click.native="log" type="primary">登录</mt-button>
  </div>
</template>
<script>
  import {mapActions,mapGetters} from 'vuex';
  import * as Types from '../../store/mutation-types'
    export default {
        data(){
            return {username:'',password:''}
        },
        created(){

        },
        methods: {
          ...mapActions([Types.LOGIN]),
          back(){
            this.$router.go(-1);
          },
          openAlert(message) {
            this.$dialog.alert({mes: message});
          },
          toastSuccess(message) {
            this.$dialog.toast({
              mes: message,
              timeout: 1500,
              icon: 'success'
            });
          },
          //异步操作
         async log(){
            if(this.username==''){
              this.openAlert('用户名不能为空!');
              return;
            }
            if(this.password==''){
              this.openAlert('密码不能为空!');
              return;
            }
           await this[Types.LOGIN]({username:this.username,password:this.password,router:this.$router});
            //console.log(this.$store.getters.getMes)
           if(this.$store.getters.getMes){
             if(this.$store.getters.getMes=='用户名或密码错误'){
               this.openAlert(this.$store.getters.getMes);
             }else if(this.$store.getters.getMes=='登录成功'){
               this.toastSuccess(this.$store.getters.getMes);
               this.username='';
               this.password='';
             }
           }
          /* this.$store.state.user.username=this.username
           this.$store.state.user.password=this.password*/
          }
        },
      computed: {
        ...mapGetters(['getUser','getMes'])
      },
        components: {}
    }
</script>
<style scoped lang="less">
  .login-panel{
    padding:56px 17px 0;
    display:flex;
    flex-direction: column;
    z-index: 20;
    position: absolute;
    background-color: #FFF;
    top:0;
    left:0;
    bottom:0;
    right:0;
    .login button{
      color:#fff
    }
    .login-logo{
      height:167px;
      width:100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width:62px;
        height:62px;
      }
    }
    input{
      border:1px solid #999999;
      outline:none;
      height:42px;
      width:100%;
      box-sizing: border-box;
      margin-bottom:20px;
      padding-left:20px;
      border-radius: 4px;
    }
    a{
      color:#188ae4;
      margin-bottom:20px;
    }
  }
</style>

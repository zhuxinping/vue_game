<template>
  <div>
    <mt-header title="注册" class="login">
      <router-link to="/login" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
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
    <mt-button type="primary" size="large" @click.native="toReg">注册</mt-button>
  </div>
</template>
<script>
  import * as Types from '../../store/mutation-types';
  import {reg} from '../../api'
    export default {
        data(){
            return {username:'',password:''}
        },
        created(){
        },
        methods: {
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
          async toReg(){
            if(this.username==''){
             this.openAlert('用户名不能为空!');
             return;
            }
            if(this.password==''){
              this.openAlert('密码不能为空!');
              return;
            }
            let result = await reg({username:this.username,password:this.password});
            if(result.code == 0 ){
              this.$router.history.push('/login');
              this.toastSuccess('注册成功!');
              this.username='';
              this.password='';
            }else{
              this.openAlert(result.error);
            }
          }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped>

</style>

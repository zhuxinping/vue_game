<template>
    <div class="bind-card">
      <yd-navbar class="header">
        <div @click="back" slot="left">
          <yd-navbar-back-icon color="#fff">返回</yd-navbar-back-icon>
        </div>
        <span slot="center">绑定银行卡</span>
      </yd-navbar>
      <yd-cell-group>
        <yd-cell-item>
          <span slot="left">持 &nbsp;卡&nbsp;人:</span>
          <yd-input   type="text"  required  max="20" ref="realname" class="name" slot="right" required v-model="inputname"  placeholder="请填写持卡人姓名"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">银行卡号:</span>
          <yd-input type="text"  required  ref="bankcard" class="name" slot="right" required v-model="inputcard" regex="bankcard" placeholder="请输入银行卡号"></yd-input>
        </yd-cell-item>
      </yd-cell-group>
      <div class="bank-title">
        请选择发卡银行 <span>*</span>
      </div>
     <div class="select-bank">
       <span>发卡银行:</span>
       <select v-model="selected">
         <option v-for="(option,index) in options" :value="option.value" :disabled="option.disabled">
           {{ option.text }}
         </option>
       </select>
     </div>
      <div class="bank-title">
        请填写支行信息 <span>*</span>
      </div>
      <yd-cell-group>
        <yd-cell-item>
          <span slot="left">支行信息:</span>
          <yd-input    type="text"  required  ref="inputcardchildren" class="name" slot="right" required v-model="inputcardchildren" placeholder="请输入支行信息"></yd-input>
        </yd-cell-item>
      </yd-cell-group>
      <div class="bank-title">
        请填写银行预留信息(非必填)
      </div>
      <yd-cell-group>
        <yd-cell-item>
          <span slot="left">手机号：</span>
          <yd-input slot="right" type="text" v-model="mobile" regex="mobile" placeholder="请输入手机号码"></yd-input>
        </yd-cell-item>
      </yd-cell-group>
     <div class="jm-tips">信息加密,仅用于银行验证</div>
      <div class="pay-now" @click="submitInfo">提交</div>
    </div>
</template>
<script>
  export default {
        data() {
            return {
              inputname:'',
              inputcard:'',
              inputcardchildren:'',
              mobile:'',
              selected: '',
              options: [
                {text: '请选择银行', value: '', disabled: ''},  //每个选项里面就不用在多一个selected 了
                {text: '工商银行', value: '1'},
                {text: '邮政银行', value: '2'},
                {text: '交通银行', value: '3'},
                {text: '中信银行', value: '4'},
                {text: '平安银行', value: '5'},
                {text: '华夏银行', value: '6'},
                {text: '建设银行', value: '7'},
                {text: '光大银行', value: '8'},
                {text: '中国银行', value: '9'},
                {text: '招商银行', value: '10'}
              ]
            }
        },
        created() {

        },
        methods: {
          back(){
            this.$router.go(-1);
          },
          select(){
            this.options[0].disabled = disabled;
          },
          openAlert(message) {
            this.$dialog.alert({mes: message});
          },
          submitInfo(){
            if(this.inputname==''){
              this.openAlert('持卡人不能为空!');
              return false;
            }
            if(this.inputcard==''){
              this.openAlert('银行卡号不能为空!');
              return false;
            }
            if(this.selected==''){
              this.openAlert('请选择发卡银行!');
              return false;
            }
            if(this.inputcardchildren==''){
              this.openAlert('支行信息不能为空!');
              return false;
            }else{
              var bankName=this.options[this.selected[0]].text;
            }
            this.$router.push({
              path:'/bindsuceess',
              query:{
                bankName:bankName,
                inputcard:this.inputcard
              }
            });
          }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
  .pay-now{
    margin: .4rem auto 0 auto;
    width: 95%;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    font-size: .3rem;
    color:#fff;
    background:#d22727;
    border-radius: .05rem;
  }
  .jm-tips {
    color: rgba(202, 202, 202, 0.9);
    text-align: center;
    padding: .1rem;
  }
  .yd-cell-left{
    width: 20%!important;
  }
  .name{
    width: 95%;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #d2d2d2;
    height: .65rem;
    padding-left: .2rem;
  }
  .bind-card{
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
  .bank-title {
    height: .6rem;
    line-height: .6rem;
    font-size: .26rem;
    color: rgba(72, 72, 76, 0.9);
    position: relative;
    padding-left: .26rem;
    text-align: left;
    background: #f5f5f5;
  }
  .bank-title span {
    color: rgba(210, 39, 39, 0.9);
  }
  .bank-title:after {
    content: "";
    position: absolute;
    width: .06rem;
    height: .3rem;
    background: #d22727;
    left: 0;
    top: .15rem;
  }
  .select-bank{
    display: flex;
    padding: .2rem;
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    span{
      font-size: .28rem;
      color:#242424;
    }
    select{
      width: 80%;
      height: .6rem;
      font-size: .28rem;
      opacity: 1;
      z-index: 2;
      border: 1px solid #ccc;
      padding: 0 .2rem;
      -webkit-appearance: none;
      border-radius: 6px;
      background-color: #ffe7e7;
    }
  }
</style>

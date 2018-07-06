<template>
  <transition name="slide-up">
    <div class="pay">
      <div class="pay-tool">
        <div class="pay-tool-title border-bottom">
          <i class="iconfont icon-BackArrow" @click="backHandle"></i><strong>请输入交易密码</strong>
        </div>
        <div class="pay-tool-content">
          <div class="pay-tool-inputs">
            <div class="item" v-for="i in items"><span class="icon_dot" v-if="password[i]"></span></div>
          </div>
          <div class="pay-tool-link"><router-link class="link" to="/getP">忘记密码？</router-link></div>
        </div>
        <div class="pay-tool-keyboard">
          <ul>
            <li @click="keyUpHandle($event)" v-for="val in keys">
              {{ val }}
            </li>
            <li class="del" @click="delHandle"><span class="icon-del"><</span></li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  const keys = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0]
    export default {
    props:['input'],
        data() {
            return {
              items: [0, 1, 2, 3, 4, 5],
              keys: keys(),
              password: []
            }
        },
        created() {

        },
        methods: {
          openAlert(message) {
            this.$dialog.alert({mes: message});
          },
          openLoading(cb) {
            this.$dialog.loading.open('正在支付中...');

            setTimeout(() => {
              this.$dialog.loading.close();
              cb();
            }, 2000);
          },
          MoneyPage(){
            this.$router.push({
              path:'/suceesspay',
              query:{
                password:this.password,
                input: this.input
              }
            });
            this.$emit('backFnc');
            this.clearPasswordHandle();
          },
          backHandle () {
            this.clearPasswordHandle()  // 返回时清除password
            this.$emit('backFnc') // 返回上级
          },
          keyUpHandle (e) {
            let text = e.currentTarget.innerText
            let len = this.password.length
            if (!text || len >= 6) return
            this.password.push(text)
            this.ajaxData();
          },
          delHandle () {
            if (this.password.length <= 0) return false
            this.password.shift()
          },
          ajaxData () {
            if (this.password.length >= 6) {
              this.openLoading(this.MoneyPage);
              //console.log(parseInt(this.password.join(' ').replace(/\s/g, '')))
            }
            return false
          },
          clearPasswordHandle: function () {
            this.password = []
          }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
  .pay{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    bottom:0;
    margin: auto;
    top: 0;
    background: rgba(0,0,0,0);
    z-index: 99;
    transform: translate3d(0,0,0);
    &.slide-up-enter-active, &.slide-up-leave-active{
      transition: all .5s ease;
    }
    &.slide-up-enter, &.slide-up-leave-to{
      transform: translate3d(0,100%,0);
    }
  }
  .pay-tool {
    position: absolute;
    width: 100%;
    height: 65%;
    bottom: 0;
    left: 0;
    background-color: #fff;
    &-title {
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      overflow: hidden;
      position: relative;
      .icon-BackArrow {
        position: absolute;
        left: .2rem;
        top: 50%;
        transform: translateY(-50%);
        font-size: .3rem;
      }
      strong {
        font-size: 0.4rem;
      }
    }
    &-content {
      .pay-tool-inputs {
        width: 6.5rem;
        box-sizing: border-box;
        height: 1rem;
        margin: .3rem auto 0;
        border: 1px solid #b9b9b9;
        border-radius: 0.05rem;
        box-shadow: 0 0 1px #e6e6e6;
        display: flex;
        .item {
          width: 16.666%;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 1rem;
          border-right: 1px solid #b9b9b9;
          &:last-child {
            border-right: none;
          }
          .icon_dot {
            display: inline-block;
            width: 0.48rem;
            height: 0.48rem;
            background: url("../assets/icon_dot .png") no-repeat;
            background-size: 100% 100%;
          }
        }
      }
      .pay-tool-link {
        padding: 0.2rem 0.8rem 0;
        text-align: right;
        .link {
          font-size: 0.3rem;
          color: #3c8cfb;
        }
      }
    }
    .pay-tool-keyboard {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li {
          width: 33.3333%;
          height: 1rem;
          line-height:1rem;
          text-align: center;
          border-right: 1px solid #aeaeae;
          border-bottom: 1px solid #aeaeae;
          font-size: 0.4rem;
          font-weight: bold;
          &:nth-child(1), &:nth-child(2), &:nth-child(3) {
            border-top: 1px solid #eee;
          }
          &:nth-child(3), &:nth-child(6), &:nth-child(9), &:nth-child(12) {
            border-right: none;
          }
          &:nth-child(10), &:nth-child(11), &:nth-child(12) {
            border-bottom: none;
          }
          &:nth-child(10), &:nth-child(12), &:active {
            background-color: #d1d4dd;
          }
          &:nth-child(12):active {
            background-color: #fff;
          }
        }
      }
    }
  }
</style>

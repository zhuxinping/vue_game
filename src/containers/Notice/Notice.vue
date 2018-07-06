<template>
    <div class="notice">
      <yd-navbar class="header">
        <div @click="back" slot="left">
          <yd-navbar-back-icon color="#fff">返回</yd-navbar-back-icon>
        </div>
        <span slot="center">消息</span>
      </yd-navbar>
      <yd-tab>
        <yd-tab-panel label="平台公告">
          <ul class="notice-list-one">
            <li v-for="(notice,index) in notices" :key="index" @click="Details(notice)">
              <div class="title">
                <div class="title-left">{{notice.title}}</div>
                <div class="title-right">{{formatDated(notice.rateTime)}}</div>
              </div>
              <div class="desc">
                {{notice.desc}}
              </div>
            </li>
          </ul>
        </yd-tab-panel>
        <yd-tab-panel label="站内消息">
          <ul class="notice-list-one">
            <li v-for="(tip,index) in tips" :key="index" @click="Details(tip)">
              <div class="title">
                <div class="title-left">{{tip.title}}</div>
                <div class="title-right">{{formatDated(tip.rateTime)}}</div>
              </div>
              <div class="desc">
                {{tip.desc}}
              </div>
            </li>
          </ul>
        </yd-tab-panel>
      </yd-tab>
    </div>
</template>
<script>
  import {getNotice,getTips} from '../../api';
  import {formatDate} from "../../common/js/date";
    export default {
        data() {
            return {
              notices:[],
              tips:[]
            }
        },
        created() {
          this.getNoticeData();
          this.getTipsData();
        },
        methods: {
          back(){
            this.$router.go(-1);
          },
          formatDated(time){
            return formatDate(time);
          },
          async getNoticeData(){
           let notices=await getNotice();
           this.notices=notices;
           //console.log(notices);
          },
          async getTipsData(){
            let tips=await getTips();
            this.tips=tips;
            console.log(tips);
          },
          Details(notice){
            this.$router.push({
              path:'/details',
              query:{
                notice:notice
              }
            });
          }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
.notice{
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
  .notice-list-one{
    li{
      display: flex;
      flex-direction: column;
      padding: .2rem .4rem;
      background: #fff;
      border-bottom: 1px solid #d7d7d7;
      position: relative;
      .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title-left{
          text-align: left;
          font-size: .32rem;
          color: #404040;
        }
        .title-right{
          text-align: right;
          font-size: .2rem;
          color:#b3b2b2;
        }
        .title-left ,.title-right{
          width: 50%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
      .desc{
        width: 100%;
        color: #b3b2b2;
        font-size: .3rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .notice-list-one li:after {
    content: "";
    width: .16rem;
    height: .16rem;
    border-radius: 50%;
    background: #ca2835;
    position: absolute;
    left: .1rem;
    top: 50%;
    margin-top: -.08rem;
  }
</style>

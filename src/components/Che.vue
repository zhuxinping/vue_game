<template>
  <div class="content">
    <div class="top">猜车号(可多选)</div>
    <div class="option">
      <select  @change="changeVal($event)">
        <option>冠军</option>
        <option>亚军</option>
        <option>第三名</option>
        <option>第四名</option>
        <option>第五名</option>
        <option>第六名</option>
        <option>第七名</option>
        <option>第八名</option>
      </select>
    </div>
    <ul class="content-list">
      <li :class="{active:item.checked}"  @click="selectItem(item)" v-for="(item,index) in conList" :key="index">
        <span>{{item.text}}</span>
        <em>{{item.num}}</em>
      </li>
    </ul>
    <div @click="hide=true" class="pei">赔率说明</div>
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
    export default {
        props:{
          val:{
            type:String,
            default:''
          },
          toggleBar:{
            type:Function
          }
        },
        data() {
            return {
              selected:"冠军",
              hide:false,
              conList:[
                {
                  title:'猜车号',
                  type:'',
                  text:'1',
                  num:9.8,
                  checked:false,
                  inputNum:''
                },
                {
                  title:'猜车号',
                  type:'',
                  text:'2',
                  num:9.8,
                  checked:false,
                  inputNum:''
                },
                {
                  title:'猜车号',
                  type:'',
                  text:'3',
                  num:9.8,
                  checked:false,
                  inputNum:''
                },
                {
                  title:'猜车号',
                  type:'',
                  text:'4',
                  num:9.8,
                  checked:false,
                  inputNum:''
                },
                {
                  title:'猜车号',
                  type:'',
                  text:'5',
                  num:9.8,
                  checked:false,
                  inputNum:''
                },
                {
                  title:'猜车号',
                  type:'',
                  text:'6',
                  num:9.8,
                  checked:false,
                  inputNum:''
                },
                {
                  title:'猜车号',
                  type:'',
                  text:'7',
                  num:9.8,
                  checked:false,
                  inputNum:''
                },
                {
                  title:'猜车号',
                  type:'',
                  text:'8',
                  num:9.8,
                  checked:false,
                  inputNum:''
                },
                {
                  title:'猜车号',
                  type:'',
                  text:'9',
                  num:9.8,
                  checked:false,
                  inputNum:''
                },
                {
                  title:'猜车号',
                  type:'',
                  text:'10',
                  num:9.8,
                  checked:false,
                  inputNum:''
                }
              ]
            }
        },
        created() {

        },
        methods: {
          //弹窗隐藏
          hideMask(){
            this.hide=false;
          },
          //选择投注
          selectItem(item){
            this.conList.forEach(v=>{
              if(item===v){
                v.checked=!v.checked
              }
            });
            this.$root.eventHub.$emit('toggleHide');
            this.toggleBar();
          },
          //选择类型
          changeVal(event){
            this.selected=event.target.value;
          },
          sendList(){
            this.conList.map(item=>{
              if(item.checked){
                item.inputNum=this.val;
                item.type=this.selected;
              }
            });
            this.$root.eventHub.$emit('send',this.conList.filter(item=>{return item.checked}));
            this.resetVal();
          },
          resetVal(){
            this.conList.map(item=>{
              item.checked=false;
            });
          }
        },
        computed: {

        },
        components: {}
    }
</script>
<style scoped lang="less">

  .content-list{
    display: flex;
    flex-wrap: wrap;
    padding: .4rem 0 .2rem 0;
    justify-content: space-around;
    li{
      background-color: #f4f4f6;
      height: 40px;
      line-height: 40px;
      box-sizing: border-box;
      border: 1px solid #f4f4f6;
      padding: 0 .1rem;
      margin: .1rem 0;
      span ,em{
        font-size: .28rem;
        width: 1rem;
        text-align: center;
        display: inline-block;
      }
    }
    li.active{
      border: 1px solid #d22727;
    }
  }
  .show-title{
    width: 100%;
    text-align: center;
    font-size: .24rem;
    line-height:.48rem;
    color: #d22727;
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
  .content{
    padding: .2rem;
    width: 100%;
    box-sizing: border-box;
  }
  .top{
    width: 100%;
    text-align: center;
  }
  .option{
    width: 100%;
    margin-top: .2rem;
    text-align: center;
    select{
      width: 4rem;
      height: .6rem;
      line-height: .6rem;
      text-align: center;
    }
  }
</style>

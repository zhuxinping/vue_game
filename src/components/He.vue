<template>
  <div class="content">
    <div class="show-title">{{this.showText}}</div>
    <div class="top">冠亚和</div>
    <ul class="content-list">
      <li :class="{active:item.checked}" @click="selecte(item,index)" v-for="(item,index) in heList" :key="index">
        <span>{{item.text}}</span>
        <em>{{item.num}}</em>
      </li>
    </ul>
    <div class="top">猜数字</div>
    <ul class="content-list">
      <li :class="{active:item.checked}" @click="selecte(item,index)" v-for="(item,index) in shuList" :key="index">
        <span>{{item.text}}</span>
        <em>{{item.num}}</em>
      </li>
    </ul>
    <div class="top">猜区段</div>
    <ul class="content-list">
      <li :class="{active:item.checked,cur:true}" @click="selecte(item,index)" v-for="(item,index) in quList" :key="index">
        <span>{{item.text}}</span>
        <span>{{range[index]}}</span>
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
        selected:"",
        hide:false,
        conList:[
          {
            title:'冠亚和',
            type:'冠亚和',
            text:'大',
            num:2.1,
            checked:false,
            inputNum:''
          },
          {
            title:'冠亚和',
            type:'冠亚和',
            text:'小',
            num:1.7,
            checked:false,
            inputNum:''
          },
          {
            title:'冠亚和',
            type:'冠亚和',
            text:'单',
            num:1.7,
            checked:false,
            inputNum:''
          },
          {
            title:'冠亚和',
            type:'冠亚和',
            text:'双',
            num:2.1,
            checked:false,
            inputNum:''
          },
          {
            title:'冠亚和',
            type:'猜数字',
            text:'8',
            num:9.8,
            checked:false,
            inputNum:''
          },
          {
            title:'冠亚和',
            type:'猜数字',
            text:'3',
            num:42,
            checked:false,
            inputNum:''
          },
          {
            title:'冠亚和',
            type:'猜数字',
            text:'4',
            num:42,
            checked:false,
            inputNum:''
          },
          {
            title:'冠亚和',
            type:'猜数字',
            text:'5',
            num:21,
            checked:false,
            inputNum:''
          },
          {
            title:'冠亚和',
            type:'猜数字',
            text:'6',
            num:21,
            checked:false,
            inputNum:''
          },
          {
            title:'冠亚和',
            type:'猜数字',
            text:'7',
            num:14,
            checked:false,
            inputNum:''
          },
          {
            title:'冠亚和',
            type:'猜数字',
            text:'8',
            num:14,
            checked:false,
            inputNum:''
          },
          {
            title:'冠亚和',
            type:'猜数字',
            text:'9',
            num:10,
            checked:false,
            inputNum:''
          },
          {
            title:'冠亚和',
            type:'猜数字',
            text:'10',
            num:10,
            checked:false,
            inputNum:''
          },
          {
            title:'冠亚和',
            type:'猜数字',
            text:'11',
            num:8,
            checked:false,
            inputNum:''
          },
          {
            title:'冠亚和',
            type:'猜数字',
            text:'12',
            num:10,
            checked:false,
            inputNum:''
          },
          {
            title:'冠亚和',
            type:'猜数字',
            text:'13',
            num:10,
            checked:false,
            inputNum:''
          },
          {
            title:'冠亚和',
            type:'猜数字',
            text:'14',
            num:14,
            checked:false,
            inputNum:''
          },
          {
            title:'冠亚和',
            type:'猜数字',
            text:'15',
            num:14,
            checked:false,
            inputNum:''
          },
          {
            title:'冠亚和',
            type:'猜数字',
            text:'16',
            num:21,
            checked:false,
            inputNum:''
          },
          {
            title:'冠亚和',
            type:'猜数字',
            text:'17',
            num:21,
            checked:false,
            inputNum:''
          },
          {
            title:'冠亚和',
            type:'猜数字',
            text:'18',
            num:42,
            checked:false,
            inputNum:''
          },
          {
            title:'冠亚和',
            type:'猜数字',
            text:'19',
            num:42,
            checked:false,
            inputNum:''
          },
          {
            title:'冠亚和',
            type:'猜区段',
            text:'A',
            num:3,
            checked:false,
            inputNum:''
          },
          {
            title:'冠亚和',
            type:'猜区段',
            text:'B',
            num:1.6,
            checked:false,
            inputNum:''
          },
          {
            title:'冠亚和',
            type:'猜区段',
            text:'C',
            num:3,
            checked:false,
            inputNum:''
          }
        ],
        showText:"",
        range:["3~7","8~14","15~19"]
      }
    },
    created() {

    },
    methods: {
      show(){
        this.hide=true;
      },
      hideMask(){
        this.hide=false;
      },
      //选择投注
      selecte(item,index){
        if(item.text=="大"){
          this.showText="冠军+亚军的值大于11";
        }
        if(item.text=="小"){
          this.showText="冠军+亚军的值小于等于11";
        }
        if(item.text=="单"){
          this.showText="冠军+亚军的值为单数";
        }
        if(item.text=="双"){
          this.showText="冠军+亚军的值为双数";
        }
        if(item.text=="3"){
          this.showText="冠军+亚军的和值等于3"
        }
        if(item.text=="4"){
          this.showText="冠军+亚军的和值等于4"
        }
        if(item.text=="5"){
          this.showText="冠军+亚军的和值等于5"
        }
        if(item.text=="6"){
          this.showText="冠军+亚军的和值等于6"
        }
        if(item.text=="7"){
          this.showText="冠军+亚军的和值等于7"
        }
        if(item.text=="8"){
          this.showText="冠军+亚军的和值等于8"
        }
        if(item.text=="9"){
          this.showText="冠军+亚军的和值等于9"
        }
        if(item.text=="10"){
          this.showText="冠军+亚军的和值等于10"
        }
        if(item.text=="11"){
          this.showText="冠军+亚军的和值等于11"
        }
        if(item.text=="12"){
          this.showText="冠军+亚军的和值等于12"
        }
        if(item.text=="13"){
          this.showText="冠军+亚军的和值等于13"
        }
        if(item.text=="14"){
          this.showText="冠军+亚军的和值等于14"
        }
        if(item.text=="15"){
          this.showText="冠军+亚军的和值等于15"
        }
        if(item.text=="16"){
          this.showText="冠军+亚军的和值等于16"
        }
        if(item.text=="17"){
          this.showText="冠军+亚军的和值等于17"
        }
        if(item.text=="18"){
          this.showText="冠军+亚军的和值等于18"
        }
        if(item.text=="19"){
          this.showText="冠军+亚军的和值等于19"
        }
        if(item.text=="A"){
          this.showText="冠军+亚军的和值位于3-7之间"
        }
        if(item.text=="B"){
          this.showText="冠军+亚军的和值位于8-14之间"
        }
        if(item.text=="C"){
          this.showText="冠军+亚军的和值位于15-19之间"
        }
        //console.log(item);
        this.conList.map(val=>{
          if(val==item){
            //如果是当前项被选中就设置true否则设置false
            val.checked=true;
          }else{
            val.checked=false;
          }
        });
        //显示输入框
        this.$root.eventHub.$emit('toggleHide');
        this.toggleBar();
      },

      sendList(){
        this.conList.map(item=>{
          if(item.checked){
            item.inputNum=this.val;
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
      //冠亚和数据
      heList(){
        return this.conList.filter(item=>{
          return item.type=="冠亚和"
        });
      },
      //猜数字数据
      shuList(){
        return this.conList.filter(item=>{
          return item.type=="猜数字"
        });
      },
      //猜区段数据
      quList(){
        return this.conList.filter(item=>{
          return item.type=="猜区段"
        });
      }
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
    padding: .2rem .2rem 1.7rem .2rem;
    width: 100%;
    box-sizing: border-box;
    overflow: auto;
    .content-list{
    li.cur{
        width: 100%;
      display: flex;
      justify-content: space-around;
      }
    }
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

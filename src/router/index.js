import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
import Course from '../containers/Course/Course.vue';
import Home from '../containers/Home/Home.vue';
import Profile from '../containers/Profile/Profile.vue';
import Login from '../containers/Login/Login.vue';
import Reg from '../containers/Reg/Reg.vue';
import Recharge from '../containers/Recharge/Recharge.vue';
import Withdraw from '../containers/Withdraw/Withdraw.vue';
import Rebate from '../containers/Rebate/Rebate.vue';
import Room from '../containers/Room/Room.vue';
import About from '../containers/About/About.vue';
import MoneyPage from '../containers/MoneyPage/MoneyPage.vue';
import MoneyPageTwo from '../containers/MoneyPageTwo/MoneyPageTwo.vue';
import DownPage from '../containers/DownPage/DownPage.vue';
import UpPage from '../containers/UpPage/UpPage.vue';
import Wallet from '../containers/Wallet/Wallet.vue';
import Notice from '../containers/Notice/Notice.vue';
import Details from '../containers/Details/Details.vue';
import SuceessPay from '../containers/SuceessPay/SuceessPay.vue';
import WalletRecord from '../containers/WalletRecord/WalletRecord.vue';
import BankCard from '../containers/BankCard/BankCard.vue';
import AddCard from '../containers/AddCard/AddCard.vue';
import BindCard from '../containers/BindCard/BindCard.vue';
import BindSuceess from '../containers/BindSuceess/BindSuceess.vue';
import Edit from '../containers/Edit/Edit.vue';
import Agent from '../containers/Agent/Agent.vue';
import Share from '../containers/Share/Share.vue';
import NoteRecord from '../containers/NoteRecord/NoteRecord.vue';
import RoomDetail from '../containers/RoomDetail/RoomDetail.vue';
export default new Router({
  mode:'history',
  routes: [
    {path:'/',name:"/",component:Home, meta: { keepAlive: true }},
    {path:'/profile',name:"profile",component:Profile,meta: { keepAlive: true,needLogin:true}},
    {path:'/course',name:"course",component:Course,meta:{needLogin:true,keepAlive: true }},
    {path:'/login',name:"login",component:Login,meta: { keepAlive: true }},
    {path:'/reg',name:"reg",component:Reg,meta: { keepAlive: true }},
    {path:'/recharge',name:"recharge",component:Recharge,meta:{keepAlive: true }},
    {path:'/withdraw',name:"withdraw",component:Withdraw,meta:{keepAlive: true }},
    {path:'/rebate',name:"rebate",component:Rebate,meta:{needLogin:true},meta: { keepAlive: true }},
    {path:'/room',name:'room',component:Room,meta:{keepAlive: true}},
    {path:'/about',name:'about',component:About,meta:{keepAlive: true}},
    {path:'/moneypage/:id',name:'moneypage',component:MoneyPage,meta: { keepAlive: true }},
    {path:'/moneypagetwo/:id',name:'moneypagetwo',component:MoneyPageTwo,meta: { keepAlive: true }},
    {path:'/down',name:'down',component:DownPage,meta: { keepAlive: true }},
    {path:'/up',name:'up',component:UpPage,meta: { keepAlive: true }},
    {path:'/wallet',name:'wallet',component:Wallet,meta: { keepAlive: true }},
    {path:'/notice',name:'notice',component:Notice,meta: { keepAlive: true }},
    {path:'/details',name:'details',component:Details,meta: { keepAlive: true }},
    {path:'/suceesspay',name:'suceesspay',component:SuceessPay,meta: { keepAlive: true }},
    {path:'/walletrecord',name:'walletrecord',component:WalletRecord,meta: { keepAlive: true }},
    {path:'/bankcard',name:'bankcard',component:BankCard,meta: { keepAlive: true }},
    {path:'/addcard',name:'addcard',component:AddCard,meta: { keepAlive: true }},
    {path:'/bindcard',name:'bindcard',component:BindCard,meta: { keepAlive: true }},
    {path:'/bindsuceess',name:'bindsuceess',component:BindSuceess,meta: { keepAlive: true }},
    {path:'/edit',name:'edit',component:Edit,meta: { keepAlive: true }},
    {path:'/agent',name:'agent',component:Agent,meta: { keepAlive: true }},
    {path:'/share',name:'share',component:Share,meta: { keepAlive: true }},
    {path:'/noterecord',name:'noterecord',component:NoteRecord,meta: { keepAlive: true }},
    {path:'/roomDetail',name:'roomDetail',component:RoomDetail,meta: { keepAlive: true }},
  ]
})

<template>
  <div id="app">
    <keep-alive>
      <router-view  v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view   v-if="!$route.meta.keepAlive"></router-view>
   <!-- <navigation>
      <router-view></router-view>
    </navigation>-->
    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from './components/Tab.vue'
export default {
  name: 'app',
  data() {
    return {

    }
  },
  created() {
    /*// bind event
    this.$navigation.on('forward', (to, from) => {
      console.log('forward to', to, 'from ', from);
    })
    this.$navigation.on('back', (to, from) => {
     // console.log('back to', to, 'from ', from);
      console.log(to);
    })
    this.$navigation.on('replace', (to, from) => {
      console.log('replace to', to, 'from ', from)
    })
    this.$navigation.on('refresh', (to, from) => {
      console.log('refresh to', to, 'from ', from)
    })
    this.$navigation.on('reset', () => {
      console.log('reset')
    })
    // and use [once, off] methods
    this.$navigation.once('forward', () => {
      console.log('appear once')
    })
    const off = () => {
      console.log('will not appear')
    }
    this.$navigation.on('forward', off)
    this.$navigation.off('forward', off)*/
  },
  components:{
    Tab
  }
}
</script>

<style>
*{margin: 0;padding: 0}
ul li{list-style: none}
a{text-decoration:none;color:#3392e6}
</style>

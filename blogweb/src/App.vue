<template>
  <div id="app">
    <home-head></home-head>
    <router-view/>
   <home-foot></home-foot>
  </div>
</template>

<script>
  import HomeHead from '@/components/Homehead'
  import HomeFoot from '@/components/HomeFoot'
export default {
  name: 'App',
  components:{
    HomeHead,
    HomeFoot
  },
  data(){
    return{
    }
  }
}
</script>

<style>
#app {
  background: #f0f0f0;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>

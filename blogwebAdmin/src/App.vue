<template>
  <div id="app">
    <div v-if="$route.name == 'Login'">
      <router-view></router-view>
    </div>
    <div v-if="$route.name != 'Login'">
      <el-header><Header></Header></el-header>
      <el-container>
        <el-main><router-view></router-view></el-main>
        <el-footer><Footer></Footer></el-footer>
      </el-container>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/common/Header'
  import Footer from '@/components/common/Footer'
export default {
  name: 'App',
  components:{
    Header,Footer
  }

}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
 #app{
   text-align: center;
   margin: 0px auto;
   padding: 0;
 }
.el-header{
  padding: 0;
}
  .el-container{
    width: 100%;
    margin: 10px auto;
  }
  .el-container .el-main{
    width: 100%;
    padding: 0;
  }

</style>

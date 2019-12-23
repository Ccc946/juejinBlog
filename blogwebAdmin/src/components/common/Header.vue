<template>
  <div id="header">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
        <el-menu-item index="1" class="btn1"><router-link to="/">管理首页</router-link></el-menu-item>
        <el-submenu index="2">
          <template slot="title">管理中心</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">个人信息</el-menu-item>
        <el-menu-item index="4">关于我们</el-menu-item>

     <el-menu-item index="5" id="login">退出登录</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
	export default {
		name: "Header.vue",
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      ...mapMutations({
        adminLogout :'ADMIN_LOGOUT'
      }),
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        if(key == 5)
        {
          this.$confirm('此操作将退出登录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
           this.adminLogout();
           this.$router.push('/login');
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          });
        });
        }
      }
    }
	}
</script>

<style scoped>
  #header{
    text-align: center;
  }
  #register{
    position: absolute;
    right: 15%;
  }
  #login{
    position: absolute;
    right: 19%;
  }
  .btn1{
    margin-left: 15%;
  }


</style>

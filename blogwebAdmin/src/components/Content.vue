<template>
	<div id="content">
    <el-container>
      <el-aside width="200px">
        <el-col :span="12">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">

            <router-link :to="{name:'WebInformation'}">
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">网站信息</span>
              </el-menu-item>
            </router-link>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>网站管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title">布局设置</template>
                <router-link :to="{name:'SlideShow'}"><el-menu-item index="2-1">轮播图</el-menu-item></router-link>
                <router-link :to="{name:'AsideInfo'}"><el-menu-item index="2-2">侧边栏信息</el-menu-item></router-link>
              </el-menu-item-group>
              <el-menu-item-group title="广告管理">
                <router-link :to="{name:'Adver'}"><el-menu-item index="2-3">广告宣传管理</el-menu-item></router-link>
                <router-link :to="{name:'OtherMana'}"><el-menu-item index="2-4">其他基本管理</el-menu-item></router-link>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>内容管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title">文章管理</template>
                <router-link :to="{name:'Article'}"><el-menu-item index="3-1">文章信息</el-menu-item></router-link>
                <router-link :to="{name:'LeaveMessage'}"><el-menu-item index="3-2">用户留言</el-menu-item></router-link>
              </el-menu-item-group>
              <el-menu-item-group title="栏目管理">
                <router-link :to="{name:'Programa'}"><el-menu-item index="3-3">栏目展示</el-menu-item></router-link>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-edit"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title">用户信息</template>
                <router-link :to="{name:'userInfo'}"><el-menu-item index="4-1">基本信息</el-menu-item></router-link>
                <el-menu-item index="4-2">私密信息</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="用户设置">
                <router-link :to="{name:'adminInfo'}"><el-menu-item index="4-3">基本设置</el-menu-item></router-link>
              </el-menu-item-group>
              <el-submenu index="4-4">
                <template slot="title">图片管理</template>
                <el-menu-item index="4-4-1">上传的图片</el-menu-item>
              </el-submenu>
            </el-submenu>

          </el-menu>
        </el-col>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
	export default {
		name: "Content.vue",
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    data(){
		  return{

      }
    }
	}
</script>

<style scoped>
  #content{
    width: 100%;
  }
.el-container{
  padding: 0;
  margin: 0;
}
.el-col-12 {
  width: 100%;
  padding: 0;
  margin: 0;
}

 .el-submenu .el-menu-item{
    font-size: 12px;
    min-width:199px;
  }


</style>

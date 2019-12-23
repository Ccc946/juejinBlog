<template>
	<div class="container main-container">
    <nav class="view-nav">
      <ul class="nav-list left">
        <li class="nav-item" v-for="nav in top_navs" :key="nav.id" @click="handlercategory(nav)">
            <a :class="{'active':flag==nav.name}">{{nav.name}}</a>
        </li>
      </ul>
    </nav>
    <div class="view welcome-view">
      <div class="welcome-context">
        <div class="feed welcome__feed">
          <nav class="category-nav nav">
            <header class="list-header">
              <nav role="navigation" class="list-nav">
                <ul class="nav-list left">
                  <li class="nav-item"  @click="cur=tag.id" v-for="tag in tags" :key="tag.id">
                    <a href="javascript:(0)" :class="{'active':cur==tag.id}">{{tag.name}}</a>
                  </li>
                </ul>
                <div class="dorp-down-area">
              </div>
              </nav>
            </header>
          </nav>
          <ul class="entry-list">
            <li class="item">
              <div class="entry-box">
                <div class="entry">
                  <a class="entry-link">
                    <div class="content-box" v-for="article in articlesCate" :key="article.id" @click="handlershow(article.id)">
<!--                      概括部分-->
                      <div class="info-box">
                        <div class="info-row meta-row">
                          <ul class="meta-list">
                            <li class="item username clickable">作者：{{article.author}}</li>
                            <li class="item">&nbsp;·&nbsp;</li>
                            <li class="item tag">文章类别：{{article.category}}</li>
                          </ul>
                        </div>
                        <div class="info-row title-row">
                          <p class="title">{{article.title}}</p>
                        </div>
                        <div class="info-row action-row">
                          <ul class="action-list">
                            <li  st:name="likeBtn" class="item like clickable">
                              <a  class="title-box">
                                <img src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg" class="icon">
                                <span class="count">{{article.like}}</span>
                              </a>
                            </li>
                            <li st:name="commentBtn" class="item comment clickable">
                              <a  href="" class="title-box">
                                <img src="https://b-gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg" class="icon">
                                <span class="count">{{article.comment}}</span>
                              </a>
                            </li>
                            <li st:name="shareBtn" title="分享" class="item share clickable hover close">
                              <img src="https://b-gold-cdn.xitu.io/v3/static/img/share.1d55e69.svg" class="icon">
                            </li>
                          </ul>
                        </div>
                      </div>
<!--                      头像部分-->
                      <div class="lazy thumb thumb loaded">
                        <img src="../../assets/logo.png" width="60">
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <aside class="welcome__side welcome__side">
<!--          注册-->
          <section st:block="register" class="shadow section auth-section">
            <div class="title">The Weed Blog</div>
            <div class="slogan">一个开发者学习成长的社区</div>
            <div class="input-group">
              <div class="input-box">
                <input v-model="username" name="registerUsername" maxlength="20" placeholder="用户名" class="input"></div>
              <div class="input-box">
                <input v-model="phone" name="registerPhoneNumber" maxlength="64" placeholder="手机号" class="input"></div>
              <!----><!---->
              <div class="input-box">
                <input v-model="password" name="registerPassword" type="password" maxlength="64" autocomplete="new-password" placeholder="密码（不少于 6 位）" class="input">
              </div>
            </div>
            <button @click.prevent="signup" st:name="registerBtn" class="btn submit-btn">立即注册</button>
            <div class="agreement-box">注册登录即表示<br>
            同意<a href="">用户协议</a>、
              <a  href="">隐私政策</a>
            </div>
          </section>

          <section st:block="link" class="shadow section link-section section">
            <ul class="link-list">
              <li class="item">
                <a  class="link" href="javascript:(0)" target="_blank">
                  <img src="https://b-gold-cdn.xitu.io/v3/static/img/collections.945b9ae.png" class="icon">
                  <span class="title">收藏集</span>
                </a>
              </li>
              <li class="item">
                <a class="link" href="javascript:(0)" target="_blank">
                  <img src="https://b-gold-cdn.xitu.io/v3/static/img/book.75582b2.png" class="icon">
                  <span class="title">社区漫游指南</span>
                </a>
              </li>
              <li class="item">
                <a class="link" href="javascript:(0)" target="_blank">
                  <img src="https://b-gold-cdn.xitu.io/v3/static/img/juejin-extension-icon.4b79fb4.png" class="icon">
                  <span class="title">下载浏览器插件</span>
                </a>
              </li>
              <li class="item">
                <a class="link" href="https://github.com/" rel="nofollow noopener noreferrer" target="_blank">
                  <img src="https://b-gold-cdn.xitu.io/v3/static/img/juejin-miner.b78347c.png" class="icon">
                  <span class="title">前往翻译计划</span>
                </a>
              </li>
              <li class="item">
                <a class="link" href="javascript:(0)" target="_blank">
                  <img src="https://b-gold-cdn.xitu.io/v3/static/img/juejin-partner.4dd2d8c.png" class="icon">
                  <span class="title">商务合作</span>
                </a>
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { getClientSize } from "../../util/util";
import { getAllArticle, signup } from "../../api/user";
	export default {
		name: "HomePag",
    data(){
		  return {
		    top_navs:[{id:1,name:'推荐'},{id:2,name:'前端'},{id:3,name:'后端'},
          {id:4,name:'Android'},{id:5,name:'iOS'},{id:6,name:'人工智能'},{id:7,name:'开发工具'},
          {id:8,name:'代码人生'},{id:9,name:'阅读'}],
        tags:[{id:1,name:'热门'},{id:2,name:'最新'},{id:3,name:'热榜'}],
        flag:'推荐',
        cur:1,
        loginOrRegi:1,
        username:'',
        phone:'',
        password:'',
        articles:[],
        articlesCate:[]
      }
    },

    mounted () {
      const res = getAllArticle();
      res
        .then(data => {
          this.articles = data;
          this.articlesCate = data;
        })
        .catch(e => {
          alert(e);
        });
    },
    computed: {
    width() {
      return getClientSize().width;
    },
    height() {
      return getClientSize().height;
    }
  },
    methods: {
      handlercategory (nav){
        this.flag=nav.name;
        console.log(this.flag);
        if (this.flag == '推荐') {
          this.articlesCate = this.articles;
        }else {
          this.articlesCate = [];
          this.articles.forEach(data => {
            if(data.category == this.flag){
              this.articlesCate.push(data);
            }
          });
        }
      },
      handlershow(path_id) {
        this.$router.push({name:'ShowArticle',params:{id:path_id}});
      },
      ...mapMutations({
      setUserName: "SET_USER_NAME",
      setUserToken: "SET_USER_TOKEN",
      isLogin:"isLogin",
      userId:"userId"
    }),
      signup() {
      const res = signup({
        username: this.username,
        phone: this.phone,
        password: this.password
      });
      res
        .then(data => {
          this.setUserName(data.username);
          this.setUserToken(data.token);
          this.userId(data.id);
          this.isLogin(true);
          this.$message.success('注册成功！');
          this.username = '';
          this.phone = '';
          this.password = '';
        })
        .catch(e => {
          alert(e);
        });
    },
    },
	}
</script>

<style scoped>
/*<!--  分类  -->*/
  .container {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 960px;
  }
  .view-nav {
    position: fixed;
    top: 61px;
    width: 100%;
    height: 2.5rem;
    z-index: 100;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    transition: all .2s;
    transform: translateZ(0);
  }
  .view-nav, .view-nav:before {
    left: 0;
    background-color: #fff;
  }
  .nav-list{
    position: relative;
  }
  .view-nav .nav-list {
    max-width: 960px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    line-height: 1;
  }
  .view-nav .nav-list .nav-item {
    height: 100%;
    align-items: center;
    display: flex;
    flex-shrink: 0;
    font-size: 0.8rem;
    color: #71777c;
    padding: 0 1rem;
  }
  .nav-item {
    position: relative;
    cursor: pointer;
  }
  a:hover {
    color: #007fff;
    text-decoration: none;
  }
  .active{
    color: #007fff;
  }

  /*文章部分*/
.main-container>.view{
  margin-top: 5.17rem;
}
.welcome-context{
  display: flex;
  align-items: flex-start;
  margin-top: 1.33rem;
}
.welcome-context .welcome__feed {
  overflow: hidden;
  flex-grow: 1;
}
.category-nav {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
}
.category-nav .list-header{
  width: 100%;
}
.list-header {
  padding: 1rem 1rem;
  border-bottom: 1px solid hsla(0,0%,59.2%,.1);
}
.list-header .list-nav, .list-header .nav-list {
  display: flex;
  justify-content: space-between;
}
.nav-item .active, .category-nav .list-header .nav-list .nav-item.dropdown a {
  color: #007fff;
}
.list-header .left .nav-item {
  padding: 0 1rem;
  font-size: 0.8rem;
  border-right: 1px solid hsla(0,0%,59.2%,.2);
}
/*文章概括部分*/
.item:not(:last-child) {
  border-bottom: 1px solid rgba(178,186,194,.15);
}
.item >a{
  color: inherit;
}
.content-box{
  background: white;
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  border-bottom: 1px solid #e6e6e6;
  cursor: pointer;
}
.info-box {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}
.meta-row {
  font-size: 0.8rem;
  color: #b2bac2;
}
.title-row{
  margin: .5rem 0 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.meta-list{
  display: flex;
  align-items: baseline;
  white-space: nowrap;
}
.meta-list .item.username {
  display: flex;
  align-items: baseline;
}
.meta-list .item.tag
{
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.title{
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.2;
  color: #2e3135;
}
.action-list {
  display: inline-flex;
  white-space: nowrap;
}
.action-list>.item.like {
  padding: 0;
}
.action-list>.item{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 .8rem;
  height: 1.5rem;
  font-size: 1.083rem;
  line-height: 1;
  white-space: nowrap;
  color: #b2bac2;
  border-radius: 1px;
  border: 1px solid #edeeef;
}
.action-list>.item .title-box {
  display: flex;
  align-items: center;
  padding: 0 .5rem;
  height: 100%;
}
.action-list>.item .count{
  color: #b2bac2;
  margin-left: .2em;
  font-weight: 300;
}
.action-list>.item.comment{
  margin-left: -1px;
  padding: 0;
}
.action-list>.item.share.close {
  margin-left: -1px;
}

  /*侧边区域*/
.welcome-context .welcome__side{
  width: 240px;
  min-width: 240px;
  margin-left: 20px;
  margin-top: 60px;
}
.welcome__side .section {
  background-color: #fff;
  border-radius: 2px;
  margin-bottom: 1.5rem;
  overflow: hidden;
}
.auth-section{
  padding: 1.333rem;
  background-color: #fff;
}
.shadow {
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
}
.slogan, .title {
  margin-bottom: .5rem;
  font-size: 1.167rem;
  color: #2e3135;
}
.title {
  font-weight: 600;
}
.input-box {
  position: relative;
  margin-bottom: .833rem;
}
.input {
  padding: .7rem .6rem;
  width: 100%;
  font-size: 0.8rem;
  background-color: #fbfbfb;
  border: 1px solid #f4f4f4;
  border-radius: 2px;
  outline: none;
  box-sizing: border-box;
}
.submit-btn{
  padding: .5rem 0;
  width: 100%;
  font-size: 1rem;
}
.button:hover, button:hover {
  background-color: #0371df;
  color: #fff;
}
.button, button {
  -webkit-appearance: none;
  appearance: none;
  background-color: #007fff;
  color: #fff;
  border-radius: 2px;
  border: none;
  padding: .5rem 1rem;
  outline: none;
  transition: background-color .3s,color .3s;
  cursor: pointer;
}
.agreement-box{
  margin-top: 1.4rem;
  font-size: 0.8rem;
  line-height: 1.2;
  color: #767676;
}
.welcome__side .section{
  background-color: #fff;
  border-radius: 2px;
  margin-bottom: 1.5rem;
  overflow: hidden;
}
.link-section .link-list{
  padding: 0;
}
.link-section .item{
  position: relative;
}
.link-section .link{
  display: flex;
  align-items: center;
  padding: 1rem;
  height: 100%;
}
.link-section .icon{
  width: 2rem;
  margin-right: .8rem;
}
.link-section .title{
  position: relative;
  font-size: 0.8rem;
  line-height: 1;
  color: #333;
}

</style>

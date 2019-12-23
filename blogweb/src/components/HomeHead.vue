<template>
  <div class="main-head-box">
    <header class="main-header main-header unauthorized visible" v-if="$store.state.flag!='/writeanarticle'">
      <div class="container">
        <a class="logo" href="/">
          <img src="../assets/bolglogo.jpg" height="60" />
        </a>
        <nav class="main-nav">
          <ul class="nav-list">
            <li class="main-nav-list">
              <ul class="nav-show-menu">
                <li
                  class="nav-item link-item"
                  :class="{'active':$store.state.flag==nav.path}"
                  v-for="nav in navs"
                  :key="nav.id"
                  @click="clickthing(nav)"
                >{{nav.name}}</li>
              </ul>
            </li>
            <li class="nav-item search">
              <form class="search-form">
                <input class="search-input" placeholder="搜索文章" />
              </form>
            </li>
            <li class="nav-item submit" @click="clickwrite('/writeanarticle')">
              <img
                src="https://b-gold-cdn.xitu.io/v3/static/img/submit-icon.53f4253.svg"
                class="icon"
              />
              <span>写文章</span>
            </li>
            <span>|</span>
            <li class="nav-item auth" v-if="!$store.state.isLogin">
              <span class="login" @click="handleClick(2)">登录</span>
              <span>&nbsp;&nbsp;</span>
              <span class="register" @click="handleClick(1)">注册</span>
            </li>
            <li class="nav-item auth" v-if="$store.state.isLogin" @click="logout=!logout">
              <div
                
                class="toggle-btn"
                style="background-image: url(&quot;http://tvax4.sinaimg.cn/crop.0.0.480.480.180/768c39d5ly8fjje1d0teej20dc0dcq35.jpg&quot;);"
              ></div>
              <div class="logout" v-if="logout">
                <ul class="logout-info">
                  <li class="logout-item" @click="toLogout">退出登录</li>
                  <li class="logout-item" @click="userInfo">个人信息</li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <!--    登录注册弹出框-->
    <div class="auth-modal-box" v-if="$store.state.regOrLogin!=0">
      <form class="auth-form">
        <div class="panfish">
          <img
            v-if="cur_fous==0 && $store.state.regOrLogin==2"
            src="https://b-gold-cdn.xitu.io/v3/static/img/normal.0447fe9.png"
            class="normal"
            style="display: block;"
          />
          <img
            v-if="cur_fous==1 && $store.state.regOrLogin==2"
            src="https://b-gold-cdn.xitu.io/v3/static/img/greeting.1415c1c.png"
            class="greeting"
            style="display: block;"
          />
          <img
            v-if="cur_fous==2 && $store.state.regOrLogin==2"
            src="https://b-gold-cdn.xitu.io/v3/static/img/blindfold.58ce423.png"
            class="blindfold"
            style="display: block;"
          />
        </div>
        <i title="关闭" class="close-btn ion-close-round" @click="shutdown(0)">×</i>
        <div class="panel">
          <h1 class="title" v-if="$store.state.regOrLogin==2">登录</h1>
          <h1 class="title" v-if="$store.state.regOrLogin==1">注册</h1>
          <!---->
          <div class="input-group">
            <!--            登录部分-->
            <div class="input-box" v-if="$store.state.regOrLogin==2">
              <input
                v-model="phone"
                name="loginPhoneOrEmail"
                maxlength="64"
                placeholder="请输入手机号"
                class="input"
                @blur="cur_fous=0"
                @focus="cur_fous=1"
              />
            </div>
            <div class="input-box" v-if="$store.state.regOrLogin==2">
              <input
                v-model="password"
                name="loginPassword"
                type="password"
                maxlength="64"
                placeholder="请输入密码"
                class="input"
                @blur="cur_fous=0"
                @focus="cur_fous=2"
              />
            </div>
            <!--              注册部分-->
            <div class="input-box" v-if="$store.state.regOrLogin==1">
              <input
                v-model="username"
                name="registerUsername"
                maxlength="20"
                placeholder="请输入用户名"
                class="input"
              />
            </div>
            <div class="input-box" v-if="$store.state.regOrLogin==1">
              <input
                v-model="phone"
                name="registerPhoneNumber"
                maxlength="64"
                placeholder="请输入手机号"
                class="input"
              />
            </div>
            <div class="input-box" v-if="$store.state.regOrLogin==1">
              <input
                v-model="password"
                name="registerPassword"
                type="password"
                maxlength="64"
                autocomplete="new-password"
                placeholder="请输入密码（不少于 6 位）"
                class="input"
              />
            </div>
          </div>
          <button class="btn" v-if="$store.state.regOrLogin==2" @click.prevent="login">登录</button>
          <button class="btn" v-if="$store.state.regOrLogin==1" @click.prevent="signup">注册</button>
          <div
            class="prompt-box"
            v-if="$store.state.regOrLogin==2"
            @click="$store.state.regOrLogin=1"
          >
            没有账号？
            <span class="clickable">注册</span>
            <a href class="right clickable">忘记密码</a>
          </div>
          <div
            class="prompt-box center"
            v-if="$store.state.regOrLogin==1"
            @click="$store.state.regOrLogin=2"
          >
            <span class="clickable">已有账号登录</span>
          </div>
        </div>
        <div class="agreement-box">
          注册登录即表示同意
          <a href>用户协议</a>、
          <a href>隐私政策</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { getClientSize } from "../util/util";
import { login, signup } from "../api/user";
export default {
  name: "HomeHead",
  data() {
    return {
      navs: [
        { id: 1, name: "首页", path: "/" },
        { id: 2, name: "话题", path: "/topic" },
        { id: 3, name: "小册", path: "/smallvolumes" },
        { id: 4, name: "热点", path: "/hot" },
        { id: 5, name: "问答", path: "/queandans" }
      ],
      cur_fous: 0,
      username: "",
      phone: "",
      password: "",
      logout:false,
    };
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
    ...mapMutations({
      setUserName: "SET_USER_NAME",
      setUserToken: "SET_USER_TOKEN",
      userLogout: "USER_LOGOUT",
      isLogin: "isLogin",
      regOrLogin: "regOrLogin",
      flag: "flag",
      userId: "userId"
    }),
    //post 登录信息
    login() {
      const phone = this.phone;
      const password = this.password;
      const res = login({
        phone: phone,
        password: password
      });
      res
        .then(data => {
          this.setUserName(data.username);
          this.setUserToken(data.token);
          this.userId(data.id);
          this.isLogin(true);
          this.regOrLogin(0);
          this.clearInput();
        })
        .catch(e => {
          alert(e);
        });
    },
    //post 注册信息
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
          this.regOrLogin(0);
          this.clearInput();
        })
        .catch(e => {
          alert(e);
        });
    },
    //退出登录
    toLogout() {
      this.userLogout();
      this.isLogin(false);
      this.logout = false;
    },
    //弹出登陆注册框
    handleClick(e) {
      this.regOrLogin(e);
    },
    //关闭登陆注册框
    shutdown(e) {
      this.regOrLogin(e);
    },
    //点击导航栏 路由跳转
    clickthing(n) {
      if (this.$store.state.flag != n.path) {
        this.$router.push({ path: n.path, params: { id: 1 } });
      }
    },
    clickwrite(e) {
      if (this.$store.state.flag != e) {
        this.$router.push({ path: "/writeanarticle", params: { id: 1 } });
      }
    },
    userInfo() {
      if (this.$store.state.flag != '/userInfo') {
        this.$router.push({ path: '/userInfo', params: { id: 1 } });
      }
    },
    //清空输入框
    clearInput() {
      this.username = '';
      this.phone = '';
      this.password = '';
    }
  }
};
</script>

<style scoped>
.main-head-box {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  background: #fdfdfe;
  position: relative;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.main-header {
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  color: #909090;
  height: 61px;
  z-index: 2500;
  max-width: 1519px;
}
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.2s;
  transform: translate3d(0, -100%, 0);
}
.main-header.visible {
  transform: translateZ(0);
}
.main-header .container {
  max-width: 960px;
  margin: auto;
}
.container {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 100%;
}
.logo {
  height: 60px;
}
.main-nav {
  height: 100%;
  flex: 1 0 auto;
}
.nav-list {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 100%;
  margin: 0;
}
.nav-show-menu {
  display: flex;
  margin-left: 10px;
}
.main-nav-list {
  display: flex;
}
.nav-item {
  float: left;
  color: #71777c;
  padding: 0 5px;
  font-size: 16px;
  margin: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.nav-item.link-item {
  padding: 0 1.5rem;
  height: 60px;
}
.nav-item.search {
  flex: 1 1 auto;
  justify-content: flex-end;
  cursor: auto;
}
.search-form {
  border: 1px solid hsla(0, 0%, 59.2%, 0.2);
  background-color: rgba(227, 231, 236, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px;
}
.search-form .search-input {
  border: none;
  width: 150px;
  padding: 0.6rem 1rem;
  box-shadow: none;
  outline: none;
  font-size: 0.8rem;
  color: #666;
  background-color: transparent;
}
.nav-item.submit {
  color: #007fff;
  position: relative;
}
.nav-item.auth {
  color: #007fff;
}

.active {
  color: #007fff;
}

/*登录框*/
.auth-modal-box {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 5000;
}
.auth-form {
  position: relative;
  padding: 2rem;
  width: 20rem;
  max-width: 100%;
  font-size: 1rem;
  background-color: #fff;
  border-radius: 2px;
  box-sizing: border-box;
}
.close-btn {
  float: right;
  cursor: pointer;
  opacity: 0.4;
  font-size: 30px;
}
.close-btn:hover {
  color: #b2bac2;
}
.agreement-box {
  margin-top: 1.667rem;
  color: #767676;
  font-size: 0.8rem;
}
.panfish .normal {
  position: absolute;
  top: 0;
  left: 50%;
  width: 9rem;
  transform: translate(-50%, -83%);
  z-index: 1;
}
.panfish .greeting {
  position: absolute;
  top: 0;
  left: 50%;
  width: 10rem;
  transform: translate(-50%, -75.8%);
  z-index: 1;
}
.panfish .blindfold {
  position: absolute;
  top: 0;
  left: 50%;
  width: 8.6rem;
  transform: translate(-50%, -75%);
  z-index: 1;
}
.title {
  font-size: 1.4rem;
  margin: 0 0 2rem;
}

.input-group {
  margin-bottom: 0.5rem;
  overflow: hidden;
}
.btn {
  width: 100%;
  height: 3rem;
  color: #fff;
  background-color: #007fff;
  border-radius: 2px;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  border: 0px;
}
.prompt-box {
  margin: 1rem 0 0;
  color: #767676;
  font-size: 0.8rem;
}
.agreement-box a {
  color: #007fff;
}
.input-box {
  position: relative;
  margin-bottom: 0.8rem;
}
.input {
  padding: 10px;
  width: 100%;
  border: 1px solid #e9e9e9;
  border-radius: 2px;
  outline: none;
  box-sizing: border-box;
}
.prompt-box .clickable {
  color: #007fff;
  cursor: pointer;
}
.prompt-box .clickable {
  color: #007fff;
  cursor: pointer;
}
.prompt-box .right {
  float: right;
}
.panfish img {
  display: none;
}
.prompt-box.center {
  text-align: center;
}
.prompt-box .clickable {
  color: #007fff;
  cursor: pointer;
}
.toggle-btn {
  width: 2.667rem;
  height: 2.667rem;
  border-radius: 50%;
  background-color: #eee;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
}
.logout{
  position: absolute;
  top: 52px;
  left: 91%;
  background: #ffffff;
  border: 1px solid #f0f0ff;
  border-radius: 5px;
  color: #000;
  font-size: 14px;
}
.logout-item {
  padding: 10px;
}
.logout-info > li:hover{
 background: #0080ff1f;
}
</style>

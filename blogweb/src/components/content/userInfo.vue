<template>
  <div class="box">
    <div class="sub-view-box shadow">
      <div class="view setting-password-view">
        <h1>修改密码</h1>
        <ul class="setting-list">
          <li class="item">
            <span class="title">旧密码</span>
            <div class="input-box password-input password-input">
              <input v-model="oldPassword" type="password" placeholder="请输入原密码" class="input" />
              <div class="action-box">
                <a href="#" class="btn">忘记密码？</a>
              </div>
            </div>
          </li>
          <li class="item">
            <span class="title">新密码</span>
            <div class="input-box password-input password-input">
              <input v-model="pass" type="password" placeholder="请输入新密码" class="input" />
              <!---->
            </div>
          </li>
          <li class="item">
            <span class="title">确认新密码</span>
            <div class="input-box password-input password-input">
              <input v-model="newPassword" type="password" placeholder="确认新密码" class="input" />
              <!---->
            </div>
          </li>
        </ul>
        <button class="submit-btn" @click="submit">保存修改</button>
      </div>
    </div>
  </div>
</template>

<script>
import { updatePwd } from "../../api/user";
import { mapState } from "vuex";
export default {
  data() {
    return {
      oldPassword: '',
      newPassword: '',
      pass: '',
    }
  },
  methods:{
    submit() {
      if(this.oldPassword == '' || this.pass == '' || this.newPassword == ''){
        alert('密码不能为空');
      }else{
        if(this.newPassword != this.pass){
          alert('两次密码不一致');
        }else{
          const res = updatePwd({
            id: this.$store.state.userId,
            oldPassword: this.oldPassword,
            newPassword: this.newPassword
          });
          res 
            .then(data => {
              alert('密码修改成功');
              this.newPassword = '';
              this.pass = '';
              this.oldPassword = '';
            }).catch(e => {
              alert(e);
            })
        }
      }
    }
  },
  computed: {
    ...mapState([
      'userToken'
    ]),
  },
  watch:{
    userToken: function (val, oldVal) {
      if(val == null){
        this.$router.push('/');
      }
    }
  }
};
</script>

<style scoped>
.box{
    width: 100%;
    max-width: 960px;
    margin: 60px auto 0;
    display: flex;
}
.sub-view-box {
    position: relative;
    padding: 1.5rem 2rem 3rem;
    background-color: #fff;
    border-radius: 2px;
    margin-top: 60px;
    width: 650px;
}
.shadow {
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
}
div {
    display: block;
}
h1 {
    font-size: 2em;
    margin: .67em 0;
}
ul {
    padding: 0;
    margin: 0;
}
.sub-view-box .setting-list .item {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-top: 1px solid #f1f1f1;
}
.sub-view-box .setting-list .item .title {
    font-size: 1rem;
    color: #333;
    width: 10rem;
}
.password-input {
    display: flex;
    justify-content: flex-end;
    flex: 1;
}
.input {
    flex: 1;
    display: inline-block;
    border: none;
    outline: none;
    color: #909090;
    font-size: 1rem;
}
.sub-view-box .setting-list .item .action-box {
    margin-left: 1rem;
}
.btn {
    background-color: transparent;
    color: #007fff;
    font-size: 1rem;
    padding: 0;
}
.submit-btn {
    float: right;
    margin: 1rem 0 0;
    padding: .5rem 0.8rem;
    font-size: 1rem;
    color: #fff;
    background-color: #007fff;
    border-radius: 2px;
    border: 1px solid #007fff;
}
</style>
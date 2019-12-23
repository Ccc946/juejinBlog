<template>
	<div id="login">
    <div id="form">
      <img id="pic" :src="images[cur_fous]"  width="150px">
      <h2 id="title">后台管理</h2>
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="50px" class="demo-ruleForm">
        <el-form-item label="用户" prop="name">
          <el-input type="text" v-model="ruleForm2.name" auto-complete="off" placeholder="请输入用户名" @blur="cur_fous=0" @focus="cur_fous=1"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm2.password" auto-complete="off" placeholder="请输入密码" @blur="cur_fous=0" @focus="cur_fous=2"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import img1 from '../../assets/images/login1.png'
  import img2 from '../../assets/images/login2.png'
  import img3 from '../../assets/images/login3.png'
  import {mapMutations} from 'vuex';
  import { login } from '../../api/admin';
	export default {
		name: "Login.vue",
    data() {
      var validatename = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('用户名不能为空'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('密码不能为空'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          name: '',
          password: ''
        },
        rules2: {
          name: [
            { validator: validatename, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ]
        },
        images:[img1,img2,img3],
        cur_fous:0
      };
    },
    methods: {
      ...mapMutations({
        setAdminToken : 'SET_ADMIN_TOKEN',
        setAdminName : 'SET_ADMIN_NAME'
        }),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const res = login({
              name:this.ruleForm2.name,
              password:this.ruleForm2.password
            });
            res
              .then((data)=>{
                this.setAdminToken(data.token);
                this.setAdminName(data.name);
                this.$router.push({name:'Content'});
              })
              .catch((e)=>{
                console.log(e);
                alert(e);
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
	}
</script>

<style scoped>
  #login{
    position: absolute;
    margin: 0;
    width: 100%;
    height: 100%;
    background: url("../../assets/images/loginbag.jpg");
  }
  #form{
    width: 500px;
    background: url("../../assets/images/透明图.png");
    margin: auto;
    margin-top: 200px;
    text-align: center;
    border-radius: 5px;
  }
  .el-form{
    padding: 50px;
    text-align: center;
  }
  #title{
    padding-top: 30px;
  }
  #pic{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -75px;
    margin-top: -260px;
  }

</style>

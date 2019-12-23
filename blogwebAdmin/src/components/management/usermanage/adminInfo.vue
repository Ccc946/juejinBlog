<template>
  <div>
    <h4>修改密码</h4>

    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="原密码" prop="oldPassword">
        <el-input type="password" placeholder="请输入原密码" v-model="ruleForm.oldPassword"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="pass">
        <el-input type="password" placeholder="请输入新密码" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" placeholder="请再输入新密码" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { changePwd } from '../../../api/admin';
export default {
  data() {
    var checkoldPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("原密码不能为空"));
      } else{
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        oldPassword: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        oldPassword: [{ validator: checkoldPassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const res = changePwd({
            adminToken: localStorage.getItem('adminToken'),
            oldPassword: this.ruleForm.oldPassword,
            newPassword: this.ruleForm.pass,
          });
          res.then(data => {
            this.$message.success('修改成功');
            this.$refs[formName].resetFields();
          }).catch(e => {
            alert(e);
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.demo-ruleForm {
  max-width: 500px;
  margin-top: 20px;
  margin-left: 30%;
}
</style>

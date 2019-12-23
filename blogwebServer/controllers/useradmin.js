const AdminModel = require('../models/AdminModel');
const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const moment = require('moment');

//管理员登录
exports.login = async (ctx)=>{
    const admin = ctx.request.body;
    try{
      //看该账号是否已经注册
      const nameSigned = await AdminModel.findOne({
          where: {
            name: admin.name
          }
      })

      //如果不存在
      if(!nameSigned){
        ctx.body = {
          code:10000,
          message:'该账号还没注册，请联系管理员注册'
        };
        return;
      }
      //已经存在
      else{
          //密码不对
          if(nameSigned.password!==admin.password){
            ctx.body = {
              code:10000,
              message:'密码不正确'
            };
            return;
          }
          //密码正确
          else{
            const token = jwt.sign(nameSigned.id,'chambers');
            ctx.body = {
              code:0,
              data:{
                token:token,
                name:nameSigned.name
              }
            }
          }
      }
    }
    catch(e){
      ctx.body = {
        code:10000,
        message:e
      }
    }
}

//管理员修改密码
exports.changePwd = async (ctx)=>{
    const pwdObj = ctx.request.body;
    pwdObj.adminToken = jwt.decode(pwdObj.adminToken);
    try{
      const adminOldPwd = await AdminModel.findOne({
        attributes:['password'],
        where:{
          id:pwdObj.adminToken
        }
      });
      if(adminOldPwd.password!==pwdObj.oldPassword){
        ctx.body = {
          code:10000,
          message:'旧密码错误'
        }
        return;
      }
      const res = await AdminModel.update(
        {
          password:pwdObj.newPassword
        },
        {
          where: {
            id:pwdObj.adminToken
          }
        }
      )
      ctx.body = {
        code:0
      }
    }
    catch(e){
      ctx.body = {
        code:10000,
        message:'网络出错'
      }
    }
}

//查询所有用户
exports.getAllUser = async (ctx)=>{
    try{
      const users = await UserModel.findAll({
        attributes:['id','username','phone','email','createtime']
      });
      ctx.body = {
        code:0,
        data:users
      }
    }
    catch(e){
      ctx.body = {
        code:10000,
        message:'网络出错'
      }
    }
}

//删除用户
exports.deleteUser = async (ctx)=>{
  const id = ctx.query.id;
  try{
    const res = await UserModel.destroy({
      where:{
        id:id
      }
    });
    ctx.body = {
      code:0
    }
  }
  catch(e){
    ctx.body = {
      code:10000,
      message:'网络出错'
    }
  }
}

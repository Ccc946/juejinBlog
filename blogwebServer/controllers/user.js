const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const moment = require('moment');

//注册
exports.signup = async (ctx) => {
    const hashPwd = bcrypt.hashSync(ctx.request.body.password, salt);
    const user = {
        password: hashPwd,
        username: ctx.request.body.username,
        phone: ctx.request.body.phone,
        createtime:new Date(),
        updatetime:new Date()
    };

    //验证手机号唯一性
    const phoneUniq = await UserModel.findOne({
        where: {
            phone: ctx.request.body.phone
        }
    })
    //如果已经存在
    if(phoneUniq) {
        ctx.body = {
            code: 10000,
            message: '该手机号已被注册！'
        };
        return;
    }

    //插入数据
    const res = await UserModel.create(user);
    const token = jwt.sign(res.id, 'chambers');
    ctx.body = {
        code: 0,
        data: {
            username: res.username,
            token: token,
            id: res.id
        }
    }
}

//登录
exports.login = async (ctx) => {
    console.log(ctx.request.body);
    const user = ctx.request.body;
    //检验手机号是否已经注册
    const phoneSigned = await UserModel.findOne({
        where: {
            phone: user.phone
        }
    })

    //如果不存在
    if(!phoneSigned) {
        ctx.body = {
            code: 10000,
            message: '该手机号还未注册，请前往注册！'
        };
        return;
    }   //已经注册
    else {
        if(!bcrypt.compareSync(user.password, phoneSigned.password)){
            ctx.body = {
                code: 10000,
                message: '密码不正确'
            };
            return;
        }
        else {  //密码正确
            const token = jwt.sign(phoneSigned.id,'chambers');
            ctx.body = {
                code: 0,
                data: {
                    username: phoneSigned.username,
                    token: token,
                    id: phoneSigned.id
                },
            }
        }
    }
}

//获取user基本资料
exports.getData = async ctx => {
    const id = jwt.verify(ctx.query.token,'chambers');
    try{
        const user = await UserModel.findOne({
            attributes:['id', 'username', 'phone', 'headimg', 'email'],
            where: {
                id: id
            }
        })
        if(!user) {
            ctx.body = {
                code: 10000,
                message: '该用户不存在'
            };
            return;
        }
        ctx.body = {
            code: 0,
            data: {
                id: user.id,
                username: user.username,
                phone: user.phone,
                headimg: user.headimg,
                email: user.email,
            }
        }
    }catch(e) {
        ctx.body = {
            code: 10000,
            message: '网络错误'
        }
    }
}


//更改用户资料
exports.updateUserData = async (ctx)=>{
    const data = ctx.request.body;
    
    try{
      const res = await UserModel.update(
        {
          email:data.email,
          username:data.username
        },
        {
          where: {
            id:data.id
          }
        }
      )
      //正常修改
      ctx.body = {
        code:0,
        username:data.username
      }
    }catch(e){
      //发生错误
      ctx.body = {
        code:10000,
        message:'网络出错'
      }
    }
  }
  
  
  //修改密码
  exports.updatePwd = async (ctx)=>{
    const data = ctx.request.body;
    
    const account = await UserModel.findOne({
        where: {
          id: data.id
        }
    })
  
    if(!bcrypt.compareSync(data.oldPassword, account.password)){
      ctx.body = {
        code:10000,
        message:'原密码不正确'
      };
      return;
    }
    //密码正确
    else{
      try{
        const hashPwd = bcrypt.hashSync(data.newPassword, salt);
        const res = await UserModel.update(
          {
            password:hashPwd
          },
          {
            where: {
              id:data.id
            }
          }
        )
        //正常修改
        ctx.body = {
          code:0,
          message: '修改成功'
        }
      }catch(e){
        //发生错误
        ctx.body = {
          code:10000,
          message:'修改密码出错'
        }
      }
    }
  }
  


const ArticleModel = require('../models/ArticleModel');
const CommentModel = require('../models/CommentModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const moment = require('moment');

//读取全部文章
exports.getAllArticle = async ctx => {
    try{
        const articles = await ArticleModel.findAll({
            attributes:['id','author','category','title','content','like','comment','createtime'],
        });
        ctx.body = {
            code: 0,
            data: articles
        }
    }catch(e){
        ctx.body = {
            code: 10000,
            message: '网络错误'
        }
    }
}

//获取文章详细信息
exports.getArticle = async ctx => {
    const id = ctx.query.id;
    console.log(id);
    try{
        const res = await ArticleModel.findOne({
            attributes:['id','author','category','title','content','like','comment','createtime'],
            where:{
                id:id
            }
        });
        ctx.body = {
            code: 0,
            data: res
        }
    }catch(e) {
        ctx.body = {
            code: 10000,
            message: '网络错误'
        }
    }
}

//写文章
exports.writeArticle = async ctx => {
    const article = ctx.request.body;
    try{
        const res = await ArticleModel.create({
            author: article.author,
            category: article.category,
            title: article.title,
            content: article.content,
            like: 0,
            comment: 0,
            createtime: new Date(),
        });
        ctx.body = {
            code: 0,
            data: res
        }
    }catch(e) {
        ctx.body = {
            code: 10000,
            message: '网络错误'
        }
    }
}

//修改文章信息
exports.changeArticle = async ctx => {
    const data = ctx.request.body;
    try{
      const res = await ArticleModel.update(
        {
          author: data.author,
          category: data.category,
          title: data.title,
          content: data.content
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
        message:'修改成功！'
      }
    }catch(e){
      //发生错误
      ctx.body = {
        code:10000,
        message:'网络出错'
      }
    }
}

//删除文章
exports.deleteArticle = async ctx => {
    const id = ctx.query.id;
    try {
        const res = await ArticleModel.destroy({
            where:{
              id:id
            }
          });
          ctx.body = {
            code:0,
            message: '删除成功！'
          }
    } catch (e) {
        ctx.body = {
            code:10000,
            message:'删除失败！'
          }
    }
}

//获取全部文章评论
exports.getAllComments = async ctx => {
    try{
        const articles = await CommentModel.findAll({
            attributes:['id','article_id','user_id','infomation','createtime','name'],
        });
        ctx.body = {
            code: 0,
            data: articles
        }
    }catch(e){
        ctx.body = {
            code: 10000,
            message: '网络错误'
        }
    }
}
//获取文章的评论
exports.getComment = async ctx => {
    const id = ctx.query.id;
    try{
        const res = await CommentModel.findAll({
            attributes:['id','article_id','user_id','infomation','createtime','name'],
            where:{
                article_id:id
            }
        });
        ctx.body = {
            code: 0,
            data: res
        }
    }catch(e) {
        ctx.body = {
            code: 10000,
            message: '网络错误'
        }
    }
}

//删除评论
exports.deleteComment = async ctx => {
    const id = ctx.query.id;
    try {
        const res = await CommentModel.destroy({
            where:{
              id:id
            }
          });
          ctx.body = {
            code:0,
            message: '删除成功！'
          }
    } catch (e) {
        ctx.body = {
            code:10000,
            message:'删除失败！'
          }
    }
}

//添加评论
exports.writeComment = async ctx => {
    const article = ctx.request.body;
    console.log(article);
    try{
        const res = await CommentModel.create({
            article_id: article.article_id,
            user_id: article.user_id,
            infomation: article.infomation,
            createtime: new Date(),
            name: article.name,
        });
        ctx.body = {
            code: 0,
            data: res
        }
    }catch(e) {
        ctx.body = {
            code: 10000,
            message: '网络错误'
        }
    }
}
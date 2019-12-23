const Router = require('koa-router');
const article = require('../controllers/article');

let router = new Router();

//读取全部文章
router.get('/api/article/getAllArticle', article.getAllArticle);

//获取文章的详细信息
router.get('/api/article/getArticle', article.getArticle);

//写文章
router.post('/api/article/writeArticle',article.writeArticle);

//修改文章
router.post('/api/article/changeArticle',article.changeArticle);

//删除文章
router.get('/api/article/deleteArticle',article.deleteArticle);

//获取全部文章评论
router.get('/api/article/getAllComments', article.getAllComments);

//获取文章的评论
router.get('/api/article/getComment', article.getComment);

//删除评论
router.get('/api/article/deleteComment', article.deleteComment);

//添加评论
router.post('/api/article/writeComment',article.writeComment);

module.exports = router;
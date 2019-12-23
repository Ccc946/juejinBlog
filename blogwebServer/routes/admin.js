const router = require('koa-router')();
const userAdmin = require('../controllers/userAdmin');


//登录
router.post('/api/admin/login', userAdmin.login);

//查询所有用户
router.get('/api/admin/allUser', userAdmin.getAllUser);

//删除指定用户
router.delete('/api/admin/deleteUser', userAdmin.deleteUser);


//修改密码
router.post('/api/admin/changePwd', userAdmin.changePwd);

module.exports = router;

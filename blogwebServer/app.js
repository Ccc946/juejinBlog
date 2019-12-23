const Koa = require('koa');
const onerror = require('koa-onerror');
const body = require('koa-body');
const logger = require('koa-logger');
const jwt = require('koa-jwt');
const cors = require('koa2-cors');
const path = require('path');
const json = require('koa-json');

const article = require('./routes/article');
const user = require('./routes/user');
const admin = require('./routes/admin');

let app = new Koa();


// error handler
onerror(app);

//中间件
//解决跨域问题
app.use(cors({
    origin: '*',
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  }));


app.use(body({
    multipart: true,
    formidable: {
        uploadDir: path.resolve(__dirname,'upload'),
        keepExtensions: true,
        maxFieldsSize: 2 * 1024 *1024,
    }
}));

app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/upload'));

//logger
app.use(async (ctx,next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(jwt({
    secret: 'chambers'
}).unless({path: [/^\/api/]}));

// routes
app.use(article.routes(), article.allowedMethods());
app.use(user.routes(), user.allowedMethods());
app.use(admin.routes(), admin.allowedMethods());


//error-handing

app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

module.exports = app;
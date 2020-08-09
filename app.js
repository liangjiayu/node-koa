const Koa = require('koa');
const bodyparser = require('koa-bodyparser');

const db = require('./mongodb');
const articleRouter = require('./routes/article');

const app = new Koa();

app.use(bodyparser());

app.use(articleRouter.routes(), articleRouter.allowedMethods());

app.listen(3000, () => {
  console.log('Koa is listening in http://localhost:3000');
});

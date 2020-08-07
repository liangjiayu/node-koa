const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = {
    aaa: 123,
  };
});

router.get('/test', async (ctx) => {
  ctx.body = ctx.url;
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Koa is listening in http://localhost:3000');
});

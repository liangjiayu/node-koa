const Router = require('koa-router');
const article = require('../controller/article');

const router = new Router({
  prefix: '/api',
});

router.post('/article/add', article.add);
router.delete('/article/del', article.del);
router.put('/article/update', article.update);
router.get('/article/list', article.list);
router.get('/article/getDetail', article.getDetail);

// router.get('/article/getDetail', (ctx)=>{
//   ctx.request.query
// });

module.exports = router;

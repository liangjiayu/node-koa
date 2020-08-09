const ArticleModel = require('../models/article');
const Message = require('./utils/index').Message;

class Article {
  constructor() {}

  async add(ctx, next) {
    const info = ctx.request.body;
    try {
      const article = await ArticleModel.create(info);
      await article.save();
      ctx.body = Message.success(article);
    } catch (error) {
      ctx.body = Message.error();
    }
  }

  async del(ctx, next) {
    const query = ctx.request.query;
    try {
      const article = await ArticleModel.findByIdAndRemove(query.id);
      ctx.body = Message.success(article);
    } catch (error) {
      ctx.body = Message.error();
    }
  }

  async list(ctx, next) {
    try {
      const list = await ArticleModel.find();
      ctx.body = Message.success(list);
    } catch (error) {
      ctx.body = Message.error();
    }
  }

  async update(ctx, next) {
    const info = ctx.request.body;
    try {
      const article = await ArticleModel.findByIdAndUpdate(info.id, info);
      ctx.body = Message.success(article);
    } catch (error) {
      ctx.body = Message.error();
    }
  }

  async getDetail(ctx, next) {
    const query = ctx.request.query;
    try {
      const article = await ArticleModel.findById(query.id);
      ctx.body = Message.success(article);
    } catch (error) {
      ctx.body = Message.error();
    }
  }
}

module.exports = new Article();

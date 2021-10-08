const express = require('express');
const articleControl = require('../controller/article');
const auth = require('../middleware/auth');
const articleValidator = require('../validator/article');

const router = express.Router();

// 获取文章列表
router.get('/');

// 获取用户关注的作者文章列表
router.get('/feed');

// 获取文章
router.get('/:slug');
// 创建
router.post('/', auth, articleValidator.createArticle);
// 更新
router.put('/:slug');
// 删除
router.delete('/:slug');
// 添加文章评论
router.post('/:slug/comments');
// 获取文章评论列表
router.get('/:slug/comments');
// 删除文章评论
router.delete('/:slug/comments/:id');

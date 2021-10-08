const express = require('express');
const userControl = require('../controller/user');
const userValidator = require('../validator/user');
const auth = require('../middleware/auth');

const router = express.Router();

// 用户登录
router.post('/users/login', userValidator.login, userControl.login)

// 用户注册
router.post('/users', userValidator.register, userControl.register) // 3. 通过验证，执行具体的控制器处理

// 获取当前登录用户
router.get('/user', auth, userControl.getCurrentUser)

// 更新当前登录用户
router.put('/user', userControl.updateCurrentUser)

module.exports = router;

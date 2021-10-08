const { body } = require('express-validator');
const validate = require('../middleware/validate');
const { User } = require('../model');
const md5 = require('../utils/md5');

exports.register = validate([ // 1.配置验证规则
    // body()验证请求体数据
    body('user.username').notEmpty().withMessage('用户名不能为空')
        .custom(async username => {
            const user = await User.findOne({ username });
            if (user) {
                return Promise.reject('用户名已存在')
            }
        }),
    body('user.email').notEmpty().withMessage('邮箱不能为空')
        .isEmail().withMessage('邮箱格式不正确')
        .bail() // 不通过不会继续往下执行
        .custom(async email => { //custom() 自定义错误消息
            const user = await User.findOne({ email });
            if (user) {
                return Promise.reject('邮箱已存在')
            }
        }),
    body('user.password').notEmpty().withMessage('密码不能为空')
], (req, res, next) => { // 2. 判断验证结果
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next()
})

exports.login = [
    validate([
        body('user.email').notEmpty().withMessage('邮箱不能为空'),
        body('user.password').notEmpty().withMessage('密码不能为空')
    ]),
    validate([
        body('user.email').custom(async (email, { req }) => {
            const user = await User.findOne({ email })
                .select(['username', 'email', 'bio', 'image', 'password'])
            if (!user) {
                return Promise.reject('用户不存在')
            }
            // 将数据挂载到请求对象中，后续的中间件也可以使用
            req.user = user
        })
    ]),
    validate([
        body('user.password').custom(async (password, { req }) => {
            if (md5(password) !== req.user.password) {
                return Promise.reject('密码错误')
            }
        })
    ])
]
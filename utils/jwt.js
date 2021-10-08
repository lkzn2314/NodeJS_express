const jwt = require('jsonwebtoken');
const { promisify } = require('util');

// 生成 jwt
// const token = jwt.sign({
//     foo: 'bar'
// }, 'lkzn2341'[])
exports.sign = promisify(jwt.sign);

// 验证jwt
// jwt.verify
exports.verify = promisify(jwt.verify);

// 不验证直接解析
exports.decode = promisify(jwt.decode);

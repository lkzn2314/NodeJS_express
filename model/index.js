const mongoose = require('mongoose');
const { dbUrl } = require('../config/config.default');

// 链接 MongoDb 数据库
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUniFiedTopology: true
})

const db = mongoose.connection;

// 连接失败
db.on('error', err => {
    console.log('MongoDB 数据库链接失败', err);
})

// 链接成功
db.once('open', () => {
    console.log('MongoDB 数据库链接成功');
})

// 组织导出模型类
module.exports = {
    User: mongoose.model('User', require('./user'))
}
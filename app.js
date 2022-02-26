const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./router');
const errHandle = require('./middleware/err-handle');
require('./model');

const app = express();

const PORT = process.env.PORT || 3000;

// 除了错误处理中间件，其他必须在路由之前
// 日志输出
app.use(morgan('dev'));

// 解析请求体
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// 跨域
app.use(cors());

// 挂载路由
app.use('/api', router);

// 挂载统一处理服务端错误中间件
app.use(errHandle());

app.listen(PORT, () => console.log(`server running at http://localhost:${PORT}/`))
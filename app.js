const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./router');

const app = express();

// 日志输出
app.use(morgan('dev'));

// 解析请求体
app.use(express.json());
app.use(express.urlencoded());

// 跨域
app.use(cors());

const PORT = process.env.PORT || 3000;

// 挂载路由
app.use('/api', router);

app.listen(PORT, () => console.log(`server running at http://localhost:${PORT}/`))
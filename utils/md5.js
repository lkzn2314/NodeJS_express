const crypto = require('crypto');

module.exports = str => {
    const pwd = crypto.createHash('md5')
        .update('lkzn2314' + str)
        .digest('hex') // 十进制

    return pwd
}


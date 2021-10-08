const util = require('util');

module.exports = () => {
    return (err, req, res, next) => {
        if (err) {
            res.status(500).json({
                // 转译错误
                error: util.format(err)
            })
        }
    }
}
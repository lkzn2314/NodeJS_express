const mongoose = require('mongoose');
const baseModel = require('./base-model');
const md5 = require('../utils/md5');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        set: value => md5(value),
        select: false // 查询不会携带
    },
    bio: {
        type: String,
        default: null
    },
    image: {
        type: String,
        default: null
    },
    ...baseModel
})

module.exports = userSchema
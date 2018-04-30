const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String, require: true, unique: true},
    pwd: {type: String, require: true},
    type: {type: String, require: true},
    //头像
    avatar: {type:String},
    // 个人简介或者职位简介
    desc: {type:String},
    // 职位名
    title: {type:String},
    // 如果你是boss 还有两个字段
    company: {type:String},
    money: {type:String}
});

module.exports = mongoose.model('User', UserSchema);

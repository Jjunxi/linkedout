const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String, require: true, unique: true},
    pwd: {type: String, require: true},
    type: {type: String, require: true},
    avatar: {type: String},
    desc: {type: String},
    title: {type: String},
    company: {type: String},
    money: {type: String}
});

module.exports = mongoose.model('User', UserSchema);

var express = require('express');
var router = express.Router();
// require('../models/main');
var User = require('mongoose').model('User');

/* GET users listing. */
router.get('/list',function(req, res){
	User.find({},function(err,doc){
		return res.json(doc)
	})
});

router.get('/info', function(req, res, next) {
  return res.json({code: 1});
});

router.post('/register', function(req, res){
	const {username, pwd, type} = req.body;
	User.findOne({username}, function(err,doc){
		if (doc) {
			return res.json({code:1, msg:'用户名重复'});
		}
		
		const userModel = new User({username, type, pwd});
		userModel.save(function(e,d){
			if (e) {
				return res.json({code:1,msg:'后端出错了'});
			}
			return res.json({code:0,data:{username, type}});
		});
	});
});

module.exports = router;

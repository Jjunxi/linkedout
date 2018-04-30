var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/info', function(req, res, next) {
  return res.json({code: 1});
});

module.exports = router;

var express = require('express');
var router = express.Router();
var Color = require('../controllers/color.controllers.js')
/* GET home page. */
router.get('/',Color.getRandom);
router.post('/',Color.create)
router.put('/',Color.add)

module.exports = router;

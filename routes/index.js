var express = require('express');
var { sumNumbers } = require('../controllers/index-controller');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
 res.status(200).json({ sum: sumNumbers(req.query.firstNumber, req.query.secondNumber)})
});

module.exports = router;

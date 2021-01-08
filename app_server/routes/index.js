var express = require('express');
var router = express.Router();

/*const homePageController = (req, res) => {
  res.render('index', {title: 'express'});
};*/

const ctrlMain = require('../controllers/main');

//router.get('/',homePageController);
router.get('/', ctrlMain.index);

module.exports = router;

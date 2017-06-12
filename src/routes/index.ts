import express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('index');
});
export = router;

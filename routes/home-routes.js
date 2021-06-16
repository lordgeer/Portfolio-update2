const router = require('express').Router();

router.get('/', (req, res) =>
  
    res.render('bio')
    );

router.get('/work', (req,res) =>

    res.render('work')
    );

router.get('/contact', (req,res) =>

    res.render('contact')
    );

module.exports = router;
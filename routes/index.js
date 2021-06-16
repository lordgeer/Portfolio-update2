const router = require('express').Router();
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);

router.use((req,res) => {
    res.send("<h1>Route? Err, that does not compute! You're under arrest!</h1>")
});

module.exports = router;

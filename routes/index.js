const router = require('express').Router();
const apiRoutes = require('./api');


router.use('/api', apiRoutes);

// if user navigates to wrong route - send API docs
// router.use((req, res) => res.send(marked(apiData)));

module.exports = router;

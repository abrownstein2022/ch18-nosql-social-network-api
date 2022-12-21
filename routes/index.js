const router = require('express').Router();
const { cleanUp } = require('../controllers/userController');
const apiRoutes = require('./api');


router.use('/api', apiRoutes);
router.get('/cleanup', cleanUp)

// if user navigates to wrong route - send API docs
// router.use((req, res) => res.send(marked(apiData)));

module.exports = router;

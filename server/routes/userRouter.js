const Router = require('express');
const router = new Router();

router.post('/regestration');
router.post('/login');
router.get('/auth');

module.exports = router;

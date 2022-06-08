const express = require('express');
const { createOrganization, getAllOrganizations } = require('../controllers/organization/organization');
const adminMiddleware = require('../middlewares/adminMiddleware');
const { validateToken } = require('../middlewares/auth');
const { validateBody } = require('../middlewares/validationOrganization');
const router = express.Router();

router.post('/public',[validateBody],createOrganization);
router.get('/public',/* validateToken, */getAllOrganizations);

module.exports = router;
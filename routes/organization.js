const express = require('express');
const { createOrganization, getAllOrganizations, editOrganization } = require('../controllers/organization/organization');
const adminMiddleware = require('../middlewares/adminMiddleware');
const { validateToken } = require('../middlewares/auth');
const { validateBody } = require('../middlewares/validationOrganization');
const router = express.Router();

router.post('/public',[validateToken,validateBody],createOrganization);
router.get('/public', [validateToken], getAllOrganizations);
router.put('/public/:id', [validateToken, adminMiddleware ,validateBody],editOrganization);

module.exports = router;
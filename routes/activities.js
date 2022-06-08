var express = require('express');
var router = express.Router();

const isAdmin = require('../middlewares/adminMiddleware')
const activitiesValidations = require('../middlewares/activitiesValidations')
const activitiesController = require  ('../controllers/activities/activitiesController');
const { validateToken} = require('../middlewares/auth');




/* POST Activity create. */
router.post('/',validateToken,isAdmin,activitiesValidations,activitiesController.create)
/* PUT Activity*/
router.put('/:id',validateToken,isAdmin,activitiesValidations,activitiesController.update);


module.exports = router;

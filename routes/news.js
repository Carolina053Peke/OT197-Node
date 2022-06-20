var express = require('express');
var router = express.Router();
const newsController = require('../controllers/news/news');
const { createNews , updateNews } = require('../middlewares/newsValidations')

/* router.get('/', function (req, res) {
    res.send('Test');
});
 */
/* GET all news */
router.get('/',/*idAmin?  */newsController.all);

/* GET news by id */
router.get('/:id',/*idAmin?  */newsController.detail);

/* POST news create. */
router.post('/',/*idAmin?  */ createNews, newsController.create);

/* DELETE news by id */
router.delete('/:id',/*idAmin?  */ newsController.delete);

/* UPDATE news by id */
router.put('/:id',/*idAmin?  */ updateNews, newsController.edit);


module.exports = router;

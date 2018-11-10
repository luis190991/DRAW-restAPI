const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const { check, body, params} = require('express-validator/check');

router.post('/', productsController.create);

router.get('/blank', productsController.blank);
/* GET users listing. */
router.get('/:page?', productsController.list);


/*router.get('/show/:id', productsController.index);

router.put('/:id', productsController.update);

router.delete('/:id', productsController.destroy);*/

module.exports = router;

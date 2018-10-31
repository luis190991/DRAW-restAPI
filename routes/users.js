var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');


router.post('/', usersController.create);

/* GET users listing. */
router.get('/:name?', usersController.list);

router.get('/:id', usersController.index);

router.put('/:id', usersController.update);

router.delete('/:id', usersController.destroy);

module.exports = router;

const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const { check, body, params} = require('express-validator/check');

router.post('/',[
  body('name').not().isEmpty(),
  body('lastName').not().isEmpty()
], usersController.create);

/* GET users listing. */
router.get('/', usersController.list);

router.get('/get/:page?', usersController.getAll);

router.get('/show/:id', usersController.index);

router.put('/:id', usersController.update);

router.delete('/:id', usersController.destroy);

module.exports = router;

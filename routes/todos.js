//jshint esversion:6 

const express = require('express');
const router = express.Router();
const todosCtrl = require('../controllers/todos');

router.get('/', todosCtrl.index);
router.get('/new', todosCtrl.new);
router.get('/:id', todosCtrl.show);
router.post('/', todosCtrl.create);
router.delete('/:id', todosCtrl.delete);
router.get('/:id/edit', todosCtrl.edit);
router.put('/:id', todosCtrl.update);

module.exports = router;
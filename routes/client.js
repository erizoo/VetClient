const express = require('express');
const controller = require('../controllers/client');
const passport = require('passport');
const router = express.Router();

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll);
router.get('/:id', passport.authenticate('jwt', {session: false}), controller.getById)
router.post('/', passport.authenticate('jwt', {session: false}), controller.create)
router.patch('/:id', passport.authenticate('jwt', {session: false}), controller.update)
module.exports = router
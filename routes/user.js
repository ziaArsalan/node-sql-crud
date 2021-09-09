const express        = require('express');
const router         = express.Router();
const UserController = require('../controllers/UserController');
let   controller     = new UserController();


router.route('/').post(controller.createUser)
router.route('/').get(controller.getUsers)
router.route('/:id').get(controller.getUser)

module.exports = router;
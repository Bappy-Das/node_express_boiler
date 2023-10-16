const express = require('express');
const router = express.Router();
const userController = require("../controllers/users.controller");

router.get('/all', userController.getAllUser)
router.post('/save', userController.saveAUser)
router.get('/:id', userController.getAUser)
router.patch('/:id', userController.updateAUser)
router.patch('/bulk-update', userController.bulkUpdate)
router.delete('/:id', userController.deleteAUser)


module.exports = router;
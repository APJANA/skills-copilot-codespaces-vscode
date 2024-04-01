// Create web server

// Import module
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment');
const auth = require('../middlewares/auth');

// Create route
router.post('/', auth, commentController.createComment);
router.post('/reply', auth, commentController.createReply);
router.get('/:id', commentController.getComment);
router.get('/reply/:id', commentController.getReply);
router.delete('/:id', auth, commentController.deleteComment);
router.delete('/reply/:id', auth, commentController.deleteReply);
router.put('/:id', auth, commentController.updateComment);
router.put('/reply/:id', auth, commentController.updateReply);

module.exports = router;
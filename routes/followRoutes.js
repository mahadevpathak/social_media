const express = require('express');
const router = express.Router();
const followController = require('../controllers/followController');

router.post('/follow/:userId', followController.followUser);
router.post('/unfollow/:userId', followController.unfollowUser);

module.exports = router;

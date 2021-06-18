const express = require('express');
const router = express.Router();
const getBlogPost = require('../controllers/postControllers');

/* GET home page. */
router.get('/posts', getBlogPost);

module.exports = router;

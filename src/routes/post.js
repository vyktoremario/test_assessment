const express = require('express');
const router = express.Router();
const getBlogPost = require('../controllers/postControllers');
const cache = require('express-redis-cache')();
const checkCache = require('../middlewares/checkCache')

/* router for getting blog posts */
router.get('/posts', checkCache, cache.route(), getBlogPost);

module.exports = router;

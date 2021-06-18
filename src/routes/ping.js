const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/ping', function(req, res, next) {
  res.status(200).json({
    success: true
  });
});

module.exports = router;

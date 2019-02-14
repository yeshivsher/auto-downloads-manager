var express = require('express');
var router = express.Router();
const runpy = require('../server/start')

router.post('/runpy', function (req, res, next) {
  const { srsName, season, episode } = req.body

  runpy(srsName, season, episode)
});

module.exports = router;

var express = require('express');
var router = express.Router();

const players = [{ name: 'Auba' }, { name: 'Laca' }]

router.get('/', (req, res) => {
  res.render('index', { 
    title: 'Players App',
    players: players 
  });
});

module.exports = router;

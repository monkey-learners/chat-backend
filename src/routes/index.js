const app = require('express');

const router = app.Router();

router.get('/', (req, res) => {
  res.send('Monkeys are here!');
});

module.exports = router;

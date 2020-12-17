  
const router = require('express').Router();
let User = require('../usermodel');



router.route('/').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
});

module.exports = router;
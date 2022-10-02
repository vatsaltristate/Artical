const express = require('express');
const midd = require('../middleware/artical.middleware.js');
const Artical = require('../controller/artical.controller.js');
const User = require('../controller/artical.controller.js');
const router = express.Router();


// router.get('/artical', (req, res) => {
//   res.send('respond with a resource');
// });
// router.post("/c", User.create);

// router.get('/user/:id', midd);
router.get('/user/:id', midd.getStatus, User.getArticalTable);
// router.get('/artical',  midd,Artical.findAll);



module.exports = router;
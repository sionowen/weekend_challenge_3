var express = require('express');
var router = express.Router();

router.post('/plus', function(req, res) {
  console.log(req.body);
  res.send(Number(req.body.firstNum) + Number(req.body.secondNum) + '');
})

router.post('/minus', function(req, res) {
  console.log(req.body);
  res.send(Number(req.body.firstNum) - Number(req.body.secondNum) + '');
})

router.post('/multiply', function(req, res) {
  console.log(req.body);
  res.send(Number(req.body.firstNum) * Number(req.body.secondNum) + '');
})

router.post('/divide', function(req, res) {
  console.log(req.body);
  res.send(Number(req.body.firstNum) / Number(req.body.secondNum) + '');
})
module.exports = router

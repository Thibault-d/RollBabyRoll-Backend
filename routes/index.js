var express = require("express");
var router = express.Router();
const Stroller = require("../models/Stroller.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  Stroller.find()
  .then((strollers) => {
    res.status(200).json(strollers);
  })
  .catch((err) => {
    console.log(err);
  });
});

module.exports = router;

var express = require("express");
const Stroller = require("../models/Stroller.js");

var router = express.Router();

router.get("/", function (req, res, next) {
  Stroller.find()
    .then((strollers) => {
      res.status(200).json(strollers);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/", (req, res, next) => {
  const { name, brand, weight, storage, handle, dimensions,maxweight,brakes,image,reversible,birth,sport,double} = req.body;
  Stroller.create({
    name,
      brand,
      weight,
      storage,
      handle,
      dimensions,
      maxweight,
      brakes,
      image,
      reversible,
      birth,
      sport,
      double,
  })
    .then((added) => {
      console.log(added);
      res.json(added);
    })
    .catch(next);
});

module.exports = router;

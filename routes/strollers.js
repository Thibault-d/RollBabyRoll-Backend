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
  const {
    name,
    brand,
    weight,
    storage,
    handle,
    dimensionsfolded,
    dimensionsopen,
    maxweight,
    brakes,
    image,
    reversible,
    birth,
    sport,
    double,
    pricerange,
    suspensions,
  } = req.body;
  Stroller.create({
    name,
    brand,
    weight,
    storage,
    handle,
    dimensionsfolded,
    dimensionsopen,
    maxweight,
    brakes,
    image,
    reversible,
    birth,
    sport,
    double,
    pricerange,
    suspensions,
  })
    .then((added) => {
      console.log(added);
      res.json(added);
    })
    .catch(next);
});

module.exports = router;

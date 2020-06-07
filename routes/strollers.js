var express = require("express");
const Stroller = require("../models/Stroller.js");
var router = express.Router();



router.get("/", (req, res, next) => {
  Stroller.find()
    .then((strollers) => {
      res.status(200).json(strollers);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/detail/:id", (req, res, next) => {
  let { id } = req.params;
  Stroller.findById(id)
    .then((strollers) => {
      res.status(200).json(strollers);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/delete/:id", (req, res, next) => {
  let { id } = req.params;
  Stroller.findByIdAndDelete(id)
    .then(() => {
      res.status(200);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/update", (req, res, next) => {
  const {
    name,
    brand,
    weight,
    storage,
    handle,
    allterrain,
    airline,
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

  Stroller.findByIdAndUpdate(
    { _id: req.body._id },
    {
      $set: {
        name: name,
        brand: brand,
        weight: weight,
        storage: storage,
        handle: handle,
        allterrain: allterrain,
        airline: dimensionsfolded,
        dimensionsopen: dimensionsopen,
        maxweight: maxweight,
        brakes: brakes,
        reversible: reversible,
        birth: birth,
        sport: sport,
        double: double,
        pricerange: pricerange,
        suspensions: suspensions,
      },
    }
  )
    .then(() => {
      res.status(200);
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
    allterrain,
    airline,
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
    allterrain,
    airline,
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
      res.status(200);
    })
    .catch(next);
});

module.exports = router;

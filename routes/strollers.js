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

router.get("/detail/:id", function (req, res, next) {
 let {id} = req.params
  Stroller.findById(id)
    .then((strollers) => {
      res.status(200).json(strollers);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/update", function (req, res, next) {
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
    { _id: req.body._id , 
     name: name ,
    brand: brand ,
     weight: weight,
    storage: name ,
     handle: handle ,
     allterrain: allterrain ,
    airline: dimensionsfolded ,
    dimensionsopen: dimensionsopen ,
   maxweight: maxweight ,
     brakes: brakes ,
     reversible: reversible ,
     birth: birth ,
     sport: sport ,
     double: double ,
     pricerange: pricerange ,
     suspensions: suspensions}
    )
    .then((updated) => {
      console.log(updated);
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
      console.log(added);
      res.json(added);
    })
    .catch(next);
});

module.exports = router;

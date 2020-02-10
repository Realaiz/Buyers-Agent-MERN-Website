const express = require("express")
const router = express.Router()
const keys = require("../config/keys");
const CityController = require("../controllers/city.js")
const auth = require('../config/auth')


router.get("/", auth, CityController.index)

router.post("/", auth, CityController.create);

router.put("/:id", auth, CityController.update);

router.delete("/:id", auth, CityController.destroy); 

module.exports = router;
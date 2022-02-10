// ./routes/celebrities.routes.js

const express			= require("express")
const router			= express.Router()

const celebritiesController = require("./../controllers/celebritiesController")

router.get("/", celebritiesController.getCelebrities)

router.get("/create", celebritiesController.create)

router.post("/create", celebritiesController.createForm)



module.exports = router
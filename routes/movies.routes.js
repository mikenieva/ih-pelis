// ./routes/celebrities.routes.js

const express			= require("express")
const router			= express.Router()

const moviesController = require("./../controllers/moviesController")

router.get("/", moviesController.getMovies)

router.get("/create", moviesController.create)

router.post("/create", moviesController.createForm)



module.exports = router
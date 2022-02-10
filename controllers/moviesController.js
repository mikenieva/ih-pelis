// ./controllers/celebritiesController.js

const Celebrity = require("../models/Celebrity")
const Movie = require("./../models/Movie")

exports.getMovies = async (req, res) => {

	const allMovies = await Movie.find({}).populate("cast")

	return res.render("movies/movies", {
		movies: allMovies
	})
}


exports.create = async (req, res) => {

	const allCelebrities = await Celebrity.find({})

	res.render("movies/new-movie", {

		celebrities: allCelebrities

	})

}

exports.createForm = async (req, res) => {

	const { title, genre, plot, cast } = req.body

	console.log(req.body)

	const newMovie = await Movie.create({title, genre, plot, cast})

	console.log(newMovie)


	res.redirect("/movies")
	

	// if(!name || !occupation || !catchPhrase){

	// 	return res.render("celebrities/new-celebrity", {
	// 		errorMsg: "Hubo un error en el formulario. Llena los espacios vacíos."
	// 	})

	// }

	// try {

	// 	const newCelebrity = await Celebrity.create({
	// 		name,
	// 		occupation,
	// 		catchPhrase
	// 	})
	
	// 	console.log(newCelebrity)
	
	// 	res.redirect("/celebrities")	

	// } catch (error) {
	// 	console.log(error)

	// 	res.render("celebrities/new-celebrity", {
	// 		errorMsg: "Error interno del servidor. Intente más tarde."
	// 	})

	// }

	


}


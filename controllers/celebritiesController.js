// ./controllers/celebritiesController.js

const Celebrity = require("./../models/Celebrity")

exports.getCelebrities = async (req, res) => {

	const allCelebrities = await Celebrity.find({})

	console.log(allCelebrities)

	return res.render("celebrities/celebrities", {
		celebrities: allCelebrities
	})
}


exports.create = (req, res) => {

	res.render("celebrities/new-celebrity")

}

exports.createForm = async (req, res) => {

	const { name, occupation, catchPhrase } = req.body

	if(!name || !occupation || !catchPhrase){

		return res.render("celebrities/new-celebrity", {
			errorMsg: "Hubo un error en el formulario. Llena los espacios vacíos."
		})

	}

	try {

		const newCelebrity = await Celebrity.create({
			name,
			occupation,
			catchPhrase
		})
	
		console.log(newCelebrity)
	
		res.redirect("/celebrities")	

	} catch (error) {
		console.log(error)

		res.render("celebrities/new-celebrity", {
			errorMsg: "Error interno del servidor. Intente más tarde."
		})

	}

	


}


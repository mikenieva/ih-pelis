const mongoose =		require("mongoose")



const movieSchema	= mongoose.Schema({

	title: {
		type: String,
		required: true
	},
	genre: {
		type: String
	},
	plot: {
		type: String
	},
	cast: [
		{
			type: mongoose.Schema.Types.ObjectID, 
			ref: "Celebrity"
		}
	]
})

// cast: [3a5sd4f5a6sd545, 5a6s5d4f56asd45f4, f4a45sdfasdfasd, d5f4a6s5d4f56as4d]

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie
const mongoose	= require("mongoose")

const celebritySchema = mongoose.Schema({

		name: {
			type: String,
			required: true
		},
		occupation: {
			type: String,
			required: true
		},
		catchPhrase: {
			type: String
		}
	},
	{timestamps: true}
)

const Celebrity = mongoose.model("Celebrity", celebritySchema)

module.exports = Celebrity
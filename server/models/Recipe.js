const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    method: {
        type: String,
        required: true,
    },
})

const Recipe = mongoose.model("recipes", RecipeSchema);
module.exports = Recipe
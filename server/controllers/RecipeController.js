const Recipe = require("../models/Recipe");
const User = require("../models/User");
const { response } = require("express");

// = Controller for Get All Books from database.
exports.findAll = async (request, response) => {
    try {
        const recipe = await Recipe.find({});
        return response.status(200).json({
            count: recipe.length,
            data: recipe
        })
    } catch (error) {
        response.status(500).send({ message: error.message })
    }
}

// = Controller for Get One Recipe from database by id.
exports.getRecipe = async (request, response) => {
    try {
        const { id } = request.params;
        const recipes = await Recipe.findById(id);
        return response.status(200).json(recipes)
    } catch (error) {
        response.status(500).send({ message: error.message })
    }
}


// = Controller for Post one Recipe to database by user.
exports.addRecipe = async (request, response) => {
    try {
        if (!request.body.name ||
            !request.body.imageUrl ||
            !request.body.description ||
            !request.body.author ||
            !request.body.ingredients ||
            !request.body.method ||
            !request.body.cookingTime ||
            !request.body.userOwner
        ) {
            return response.status(400).send({
                message: "Send all required fields: name, imageUrl, description, author, ingredients, method, cookingTime, userOwner"
            })
        }
        const newRecipe = {
            name: request.body.name,
            imageUrl: request.body.imageUrl,
            description: request.body.description,
            author: request.body.author,
            ingredients: request.body.ingredients,
            method: request.body.method,
            cookingTime: request.body.cookingTime,
            userOwner: request.body.userOwner
        }
        const recipe = await Recipe.create(newRecipe);
        return response.status(201).send(recipe)
    } catch (error) {
        response.status(500).send({ message: error.message })
    }
}

// = Controller to Save a Recipe by a User
exports.savedRecipe = async (request, response) => {
    try {
        if (!request.body.name ||
            !request.body.imageUrl ||
            !request.body.description ||
            !request.body.author ||
            !request.body.ingredients ||
            !request.body.method ||
            !request.body.cookingTime ||
            !request.body.userOwner
        ) {
            return response.status(400).send({
                message: "Send all required fields: name, imageUrl, description, author, ingredients, method, cookingTime, userOwner"
            })
        }
        const recipe = await Recipe.findById(request.body.recipeId);
        const user = await User.findById(request.body.userId);
        user.savedRecipe.push(recipe);
        await user.save();
        response.status(201).json({ savedRecipes: user.savedRecipes });
    } catch (error) {
        response.status(500).send({ message: error.message })
    }
}

// = Controller to Gei ID of Recipe, which saved by a user
exports.idOfSavedRecipe = async (request, response) => {
    try {
        const user = await UserModel.findById(req.params.userId);
        response.status(201).json({ savedRecipes: user?.savedRecipes });
    } catch (error) {
        response.status(500).send({ message: error.message })
    }
}

// = Controller to Get the saved recipes of a user
exports.getSavedRecipe = async (request, response) => {
    try {
        const user = await UserModel.findById(req.params.userId);
        const savedRecipes = await RecipesModel.find({
            _id: { $in: user.savedRecipes },
        });
        console.log(savedRecipes);
        response.status(201).json({ savedRecipes });
    } catch (error) {
        response.status(500).send({ message: error.message })
    }
}

// = Controller for Delete a Book
exports.deleteRecipe = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Recipe.findByIdAndDelete(id)
        if (!result) {
            return response.status(404).json({ message: "Recipe not found" })
        }
        return response.status(200).send({ message: "Recipe deleted successfully" })
    } catch (error) {
        response.status(500).send({ message: error.message })
    }
}

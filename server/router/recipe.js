const express = require("express");
const router = express.Router();
const RecipeController = require("../controllers/RecipeController")

router.get("/", RecipeController.findAll)
router.get("/:id", RecipeController.getRecipe)
router.post("/", RecipeController.addRecipe)
router.put("/:id", RecipeController.savedRecipe)
router.get("/savedRecipes/ids/:userId", RecipeController.idOfSavedRecipe)
router.get("/savedRecipe/:userId", RecipeController.getSavedRecipe)
router.delete("/:id", RecipeController.deleteRecipe)

module.exports = router;
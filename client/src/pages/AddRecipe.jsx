import { useState } from "react";

const AddRecipe = () => {
  const [addRecipe, setAddRecipe] = useState({
    name: "",
    imageUrl: "",
    description: "",
    author: "",
    ingredients: [],
    method: [],
    cookingTime: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddRecipe({ ...addRecipe, [name]: value });
  };

  const addIngredients = () => {
    setAddRecipe({ ...AddRecipe, ingredients: [...addRecipe.ingredients, ""] });
  };

  return (
    <div className="w-full bg-grey-lightest" style={{ paddingTop: "0.25rem" }}>
      <div className="container mx-auto py-8">
        <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
          <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
            Add Your Recipe
          </div>
          <div className="py-4 px-8">
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="first_name"
              >
                Recipe Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="first_name"
                placeholder="Recipe Name"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="image url"
              >
                Image Url
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="image url"
                placeholder="Paste Image Url"
                name="imageUrl"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="description"
                type="text"
                placeholder="Description"
                name="description"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="author"
              >
                Author
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="author"
                placeholder="Recipe Author"
                name="author"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="ingredients"
              >
                Ingredients
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="author"
                placeholder="Recipe Author"
                name="author"
                onChange={handleChange}
              />
              <div className="flex items-center justify-between mt-8">
                <button className="btn" type="submit" onClick={addIngredients}>
                  Add Ingredients
                </button>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="methods"
              >
                Methods
              </label>
              <div className="flex items-center justify-between mt-8">
                <button className="btn" type="submit">
                  Add Methods
                </button>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="cooking time"
              >
                Cooking Time
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="cooking time"
                placeholder="Cooking Time"
                name="cookingTime"
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-between mt-8">
              <button className="btn" type="submit">
                Add Recipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;

import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";

const API = "http://localhost:3001/api";
const RECIPES_ENDPOINT = `${API}/recipe`;
const modalId = "app-modal";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [_, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState();

  const handleSetDetails = (payload) => {
    if (!payload) return;
    setDetails(payload);
    showModal();
  };

  const showModal = () => {
    document.getElementById(modalId).showModal();
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const { data: respData } = await axios.get(RECIPES_ENDPOINT);
        const { data: recipesData } = respData;
        if (recipesData.length) {
          setRecipes(recipesData);
          setIngredients(recipesData.ingredients);
        }
      } catch (error) {
        const message =
          error.message || "Something went wrong fetching recipes!";
        console.error(message);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <Navbar />
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {recipes.map((recipe, idx) => {
          return (
            <Card
              key={`recipe-${idx}-${recipe._id}`}
              recipe={recipe}
              onDetailsClick={handleSetDetails}
            />
          );
        })}
      </div>
      {
        <Modal modalId={modalId}>
          {details ? (
            <div>
              <h3 className="text-xl text-center text-[#AD045F]">
                {details.name}
              </h3>
              <p className="py-2 font-normal text-justify">
                <b className="text-xl text-[#29ADB2]">Author:</b>
                {details.author}
              </p>
              <p className="py-3 font-normal text-justify">
                <b className="text-xl text-[#29ADB2]">Cooking Time:</b>
                {details.cookingTime} Minutes
              </p>
              <p className="py-4 font-normal text-justify">
                <b className="text-xl text-[#29ADB2]">Description:</b>
                {details.description}
              </p>
              <p className="py-2 font-normal text-justify">
                <b className="text-xl text-[#29ADB2]">Ingredients:</b>
                {details.ingredients}
              </p>
              <p className="py-2 font-normal text-justify">
                <b className="text-xl text-[#29ADB2]">Method:</b>
                {details.method}
              </p>
            </div>
          ) : null}
        </Modal>
      }
    </div>
  );
};

export default Home;

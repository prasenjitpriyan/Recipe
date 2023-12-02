import { PropTypes } from "prop-types";
import Button from "./Button";

const Card = ({ recipe, onDetailsClick }) => {
  const { imageUrl, author, name } = recipe;

  const handleDetailsClick = () => {
    onDetailsClick(recipe);
  };
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <img
        src={imageUrl}
        alt="Product"
        className="h-80 w-72 object-cover rounded-t-xl"
      />
      <div className="px-4 py-3 w-72">
        <p className="text-base font-bold text-black truncate block capitalize">
          {name}
        </p>
        <div className="flex items-center">
          <p className="text-sm font-semibold text-black cursor-auto my-3">
            {author}
          </p>
          <div className="ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <div>
              <Button onClick={handleDetailsClick}>Details</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  recipe: PropTypes.shape({
    _id: PropTypes.number,
    imageUrl: PropTypes.string,
    author: PropTypes.string,
    name: PropTypes.string,
  }),
};

import { PropTypes } from "prop-types";

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-xs">
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.array,
  onClick: PropTypes.array,
};

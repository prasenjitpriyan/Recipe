import { PropTypes } from "prop-types";

const Modal = ({ children, modalId }) => {
  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box w-11/12 max-w-5xl h-[calc(95vh-60px)]">
        <h3 className="font-bold text-lg">{children}</h3>
        <p className="py-4"></p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              X
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.array,
  modelId: PropTypes.number,
};

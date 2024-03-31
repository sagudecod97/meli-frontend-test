import "./loading-component.scss";
import ReactDOM from "react-dom";

const LoadingComponent = ({ isOpen }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="loading-modal">
      <div className="loading-modal__spinner"></div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default LoadingComponent;

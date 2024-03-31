import "./result-card.scss";
import { Link } from "react-router-dom";

const ResultCard = (props) => {
  const {
    resultInfo: { id, title, price, picture, free_shipping },
  } = props;

  return (
    <div title={title} className="result-card" to={`/product/${id}`}>
      <div
        className="result-card__image"
        style={{ backgroundImage: `url(${picture})` }}
      />

      <div className="details">
        <p className="details__price">&#36; {price.amount}</p>
        {free_shipping && (
          <span className="details__icon material-symbols-outlined">
            local_shipping
          </span>
        )}
        <p className="details__location">Mendoza</p>
      </div>

      <Link className="result-card__link" to={`/product/${id}`}>
        <h2 className="result-card__link-title">{title}</h2>
      </Link>
    </div>
  );
};

export default ResultCard;

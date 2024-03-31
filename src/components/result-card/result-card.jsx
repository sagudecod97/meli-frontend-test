import "./result-card.scss";

const ResultCard = (props) => {
  const {
    resultInfo: { title, price, picture, free_shipping },
  } = props;

  return (
    <div className="result-card">
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

      <p className="result-card__title">{title}</p>
    </div>
  );
};

export default ResultCard;

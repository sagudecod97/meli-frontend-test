import "./product-detail.scss";

import { productDetailMock } from "../../data/productDetail";

const ProductDetail = () => {
  const { title, picture, condition, sold_quantity, price, description } =
    productDetailMock.item;

  return (
    <section className="product-detail">
      <div className="product-detail__picture">
        <img
          className="product-detail__picture-img"
          src={picture}
          alt={title}
        />
      </div>

      <div className="product-detail__container">
        <p className="product-detail__details">
          <span>{condition ? "Nuevo" : "Usado"}</span> - {sold_quantity}{" "}
          vendidos
        </p>

        <h1 className="product-detail__title">{title}</h1>

        <p className="product-detail__price">&#36; {price.amount}</p>

        <button className="product-detail__buy">Comprar</button>
      </div>

      <p className="product-detail__subtitle">Descripción del producto</p>

      <p className="product-detail__description">{description}</p>
    </section>
  );
};

export default ProductDetail;

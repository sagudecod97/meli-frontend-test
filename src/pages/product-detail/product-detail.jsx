import "./product-detail.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../services/getProductDetails";

import LoadingComponent from "../../components/loading-component/loading-component";

const ProductDetail = () => {
  const [productDetails, setProductDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { productId } = useParams();

  const {
    title = "",
    picture = "",
    condition = "",
    sold_quantity = 0,
    price = 0,
    description = "",
  } = productDetails;

  const conditionValues = {
    new: "Nuevo",
    used: "Usado",
  };

  const fetchProductDetails = async () => {
    try {
      setIsLoading(true);
      const { item } = await getProductDetails(productId);
      setProductDetails(item);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching product details", error);
    }
  };

  useEffect(() => {
    console.log("Product Id to look: ", productId);
    fetchProductDetails();
  }, []);

  return (
    <section className="product-detail">
      {!isLoading ? (
        <>
          <div className="product-detail__picture">
            <img
              className="product-detail__picture-img"
              src={picture}
              alt={title}
            />
          </div>

          <div className="product-detail__container">
            <p className="product-detail__details">
              <span>{conditionValues[condition]}</span> - {sold_quantity}{" "}
              vendidos
            </p>

            <h1 className="product-detail__title">{title}</h1>

            <p className="product-detail__price">&#36; {price.amount}</p>

            <button className="product-detail__buy">Comprar</button>
          </div>

          <p className="product-detail__subtitle">Descripción del producto</p>

          <p className="product-detail__description">{description}</p>
        </>
      ) : (
        <LoadingComponent isOpen={isLoading} />
      )}
    </section>
  );
};

export default ProductDetail;

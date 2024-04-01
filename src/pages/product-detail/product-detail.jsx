import "./product-detail.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../services/getProductDetails";

import LoadingComponent from "../../components/loading-component/loading-component";
import Message from "../../components/message/message";

const ProductDetail = () => {
  const [productDetails, setProductDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

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

  const messageProps = {
    title: "El producto no fue encontrado",
    message: "Lo sentimos, el producto que estabas buscando no fue encontrado.",
    iconSad: true,
  };

  const fetchProductDetails = async () => {
    try {
      setIsLoading(true);
      const item = await getProductDetails(productId);

      if (!item) {
        setNotFound(true);
        return setIsLoading(false);
      }

      setProductDetails(item);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Error fetching product details", error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <section className="product-detail">
      {notFound && (
        <Message
          title={messageProps.title}
          message={messageProps.message}
          sad={messageProps.iconSad}
        />
      )}

      {!isLoading && !notFound ? (
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
              Vendidos
            </p>

            <h1 className="product-detail__title">{title}</h1>

            <div className="product-detail__price">
              <p className="product-detail__price-amount">
                &#36; {price.amount}
              </p>
              <p className="product-detail__price-decimals">{price.decimals}</p>
            </div>

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

import { productDetailMock } from "../data/productDetail";

export const getProductDetails = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productDetailMock);
    }, 3000);
  });

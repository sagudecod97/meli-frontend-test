import { getDecimals } from "../utils/helpers.utils";

export const getProductDetails = async (productId) => {
  try {
    const requestDetails = await fetch(
      `https://api.mercadolibre.com/items/${productId}`
    );
    const responseDetails = await requestDetails.json();

    if (requestDetails.status === 404) return null;

    const requestDescription = await fetch(
      `https://api.mercadolibre.com/items/${productId}/description`
    );
    const responseDescription = await requestDescription.json();

    return {
      id: responseDetails.id,
      title: responseDetails.title,
      price: {
        currency: responseDetails.currency_id,
        amount: responseDetails.price,
        decimals: getDecimals(responseDetails.price),
      },
      picture: responseDetails.pictures[0].secure_url,
      condition: responseDetails.condition,
      free_shipping: responseDetails.shipping.free_shipping,
      sold_quantity: requestDetails?.sold_quantity,
      description: responseDescription.plain_text,
    };
  } catch (error) {
    throw error;
  }
};

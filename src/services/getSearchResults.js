import {
  formatCategories,
  formatItems,
  formatQuery,
} from "../utils/format.utils";

export const getSearchResults = async (query) => {
  try {
    const request = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${formatQuery(
        query
      )}#json`
    );
    const response = await request.json();

    const results = {
      categories: formatCategories(response.filters),
      items: response.results.map(formatItems).slice(0, 4),
    };

    return results;
  } catch (err) {
    console.log(err);
  }
};

export const formatCategories = (filtersArray) => {
  if (!filtersArray.length) return [];

  const categoriesFilters = filtersArray.find(
    (filter) => filter.id === "category"
  );

  let filteredCategories = categoriesFilters.values[0].path_from_root;

  filteredCategories.reduce((acc, currentItem) => {
    acc.push(currentItem.name);
    return acc;
  }, []);

  return filteredCategories;
};

export const formatItems = (item) => {
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals: (item.price % 1).toFixed(2).split(".")[1],
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.condition.free_shipping,
  };
};

export const formatQuery = (query) => {
  const splitQuery = query.split(" ");

  return splitQuery.join("+");
};

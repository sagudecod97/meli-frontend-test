import { searchResultsMock } from "../data/searchResults";

export const getSearchResults = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(searchResultsMock);
    }, 3000);
  });

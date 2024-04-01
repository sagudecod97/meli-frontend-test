import { useState, useEffect, createContext } from "react";
import { getSearchResults } from "../services/getSearchResults";

const INITAL_CONTEXT = {
  searchInput: "",
  setSearchInput: () => null,
  isLoading: false,
  searchResults: [],
  categories: [],
  totalResults: null,
};

export const SearchContext = createContext(INITAL_CONTEXT);

export const SearchProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [categories, setCategories] = useState([]);
  const [totalResults, setTotalResults] = useState(null);
  const [initialRender, setInitialRender] = useState(true);

  const value = {
    searchInput,
    setSearchInput,
    isLoading,
    searchResults,
    categories,
    totalResults,
  };

  const fetchSearchResults = async () => {
    try {
      setIsLoading(true);
      const { items, categories, totalResults } = await getSearchResults(
        searchInput
      );
      setSearchResults(items);
      setCategories(categories);
      setTotalResults(totalResults);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Error fetching results: ", error);
    }
  };

  useEffect(() => {
    if (!initialRender && searchInput.length) {
      fetchSearchResults();
    } else {
      setInitialRender(false);
    }
  }, [searchInput]);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

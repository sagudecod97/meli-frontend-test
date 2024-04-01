import { useState, useEffect, createContext } from "react";
import { getSearchResults } from "../services/getSearchResults";

const INITAL_CONTEXT = {
  searchInput: "",
  setSearchInput: () => null,
  isLoading: false,
  setIsLoading: () => null,
  searchResults: [],
  setSearchResults: () => null,
};

export const SearchContext = createContext(INITAL_CONTEXT);

export const SearchProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [initialRender, setInitialRender] = useState(true);

  const value = {
    searchInput,
    setSearchInput,
    isLoading,
    searchResults,
  };

  const fetchSearchResults = async () => {
    try {
      setIsLoading(true);
      const results = await getSearchResults();
      setSearchResults(results);
      setIsLoading(false);
    } catch (error) {
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

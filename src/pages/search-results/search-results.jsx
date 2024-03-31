import "./search-results.scss";
import { useContext } from "react";
import { SearchContext } from "../../context/search.context";

import ResultCard from "../../components/result-card/result-card";
import WelcomeMessage from "../../components/welcome-message/welcome-message";

const SearchResults = () => {
  const { searchResults } = useContext(SearchContext);
  const resultsLength = searchResults.length - 1;
  return (
    <section className="search-results">
      {searchResults.map((result, index) => {
        return (
          <>
            <ResultCard key={result.id} resultInfo={result} />
            {resultsLength !== index && (
              <hr className="search-results__separator" />
            )}
          </>
        );
      })}

      {!searchResults.length && <WelcomeMessage />}
    </section>
  );
};

export default SearchResults;

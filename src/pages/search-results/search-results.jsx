import "./search-results.scss";
import ResultCard from "../../components/result-card/result-card";

import { searchResultsMock } from "../../data/searchResults";

const SearchResults = () => {
  const resultsLength = searchResultsMock.length - 1;
  return (
    <section className="search-results">
      {searchResultsMock.map((result, index) => {
        return (
          <>
            <ResultCard key={result.id} resultInfo={result} />
            {resultsLength !== index && (
              <hr className="search-results__separator" />
            )}
          </>
        );
      })}
    </section>
  );
};

export default SearchResults;

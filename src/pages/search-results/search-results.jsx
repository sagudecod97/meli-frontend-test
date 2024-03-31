import "./search-results.scss";

import { searchResultsMock } from "../../data/searchResults";

const SearchResults = () => {
  return (
    <section className="search-results">
      {searchResultsMock.map((result) => {
        return (
          <>
            <div
              style={{
                width: "100%",
                height: "200px",
                background: "white",
              }}
            />
            <hr className="search-results__separator" />
          </>
        );
      })}
    </section>
  );
};

export default SearchResults;

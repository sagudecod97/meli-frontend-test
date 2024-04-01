import "./search-results.scss";
import { useContext } from "react";
import { SearchContext } from "../../context/search.context";

import ResultCard from "../../components/result-card/result-card";
import Message from "../../components/message/message";
import LoadingComponent from "../../components/loading-component/loading-component";

const SearchResults = () => {
  const { searchResults, isLoading, totalResults } = useContext(SearchContext);
  const resultsLength = searchResults.length - 1;

  const messageWelcome = {
    title: "Bienvenido al Buscador",
    message:
      "¿Qué estás buscando hoy? Ingresa tu consulta a continuación y presiona buscar.",
    iconHappy: true,
  };

  const messageNotFound = {
    title: "El producto no fue encontrado",
    message: "Lo sentimos, el producto que estabas buscando no fue encontrado.",
    iconSad: true,
  };

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

      {!searchResults.length && totalResults === null && (
        <Message
          title={messageWelcome.title}
          message={messageWelcome.message}
          happy={messageWelcome.iconHappy}
        />
      )}

      {!searchResults.length && totalResults !== null && (
        <Message
          title={messageNotFound.title}
          message={messageNotFound.message}
          sad={messageNotFound.iconSad}
        />
      )}

      {isLoading && <LoadingComponent isOpen={isLoading} />}
    </section>
  );
};

export default SearchResults;

import "./search-bar.scss";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/search.context";

const SearchBar = () => {
  const { setSearchInput } = useContext(SearchContext);

  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchValue = (event) => {
    const { value } = event.target;

    setSearchValue(value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setSearchInput(searchValue);
  };

  return (
    <form className="search">
      <input
        className="search__input"
        type="text"
        id="search"
        value={searchValue}
        onChange={onChangeSearchValue}
        placeholder="Nunca dejes de buscar"
        aria-label="Ingresar búsqueda"
      />

      <button
        className="search__button"
        type="submit"
        aria-label="Buscar"
        onClick={onSubmitHandler}
      >
        <span className="material-symbols-outlined">search</span>
      </button>
    </form>
  );
};

export default SearchBar;

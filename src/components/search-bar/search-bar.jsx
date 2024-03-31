import "./search-bar.scss";

const SearchBar = () => {
  return (
    <form className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Nunca dejes de buscar"
      />
      <button className="search__button">
        <span class="material-symbols-outlined">search</span>
      </button>
    </form>
  );
};

export default SearchBar;

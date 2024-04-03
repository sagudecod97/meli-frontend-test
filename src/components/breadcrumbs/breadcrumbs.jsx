import "./breadcrumbs.scss";
import { useContext } from "react";
import { SearchContext } from "../../context/search.context";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  const { setSearchInput, categories } = useContext(SearchContext);
  const categoriesLastIndex = categories.length - 1;

  const setCategoryHandler = (categoryName) => {
    setSearchInput(categoryName);
  };

  return (
    <nav className="breadcrumbs">
      <ol className="breadcrumbs__list">
        {categories.map((category, index) => {
          const encodedStringQuery = encodeURIComponent(category.name);

          return (
            <li
              className="breadcrumbs__list-item"
              onClick={() => setCategoryHandler(category.name)}
            >
              <Link
                className={`breadcrumbs__list-link ${
                  categoriesLastIndex === index ? "--bolder" : ""
                }`}
                to={`/items?search=${encodedStringQuery}`}
              >
                {category.name}{" "}
                {categoriesLastIndex !== index && <span>&gt;</span>}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

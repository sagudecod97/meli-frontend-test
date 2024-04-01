import "./breadcrumbs.scss";
import { useContext } from "react";
import { SearchContext } from "../../context/search.context";
import { Link, useNavigate } from "react-router-dom";

const Breadcrumbs = () => {
  const { setSearchInput, categories } = useContext(SearchContext);
  const navigate = useNavigate();
  const categoriesLastIndex = categories.length - 1;

  const goToCategoryHandler = (categoryName) => {
    navigate("/");
    setSearchInput(categoryName);
  };

  return (
    <nav className="breadcrumbs">
      <ol className="breadcrumbs__list">
        {categories.map((category, index) => {
          return (
            <li className="breadcrumbs__list-item">
              <Link
                className={`breadcrumbs__list-link ${
                  categoriesLastIndex === index ? "--bolder" : ""
                }`}
                onClick={() => goToCategoryHandler(category.name)}
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

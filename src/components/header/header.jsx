import "./header.scss";
import { Outlet, Link, useNavigate } from "react-router-dom";

import SearchBar from "../search-bar/search-bar";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import MercadoLibreLogo from "../../assets/images/mercadolibre-logo.png";

const Header = () => {
  const navigate = useNavigate();

  const clickLogoHandler = () => {
    navigate("/items");
    window.location.reload();
  };

  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link to="/items" onClick={clickLogoHandler}>
            <div
              className="header__logo"
              style={{ backgroundImage: `url(${MercadoLibreLogo})` }}
            />
          </Link>

          <SearchBar />
        </div>
      </header>

      <aside>
        <Breadcrumbs />
      </aside>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;

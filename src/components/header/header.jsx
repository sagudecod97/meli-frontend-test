import "./header.scss";
import { Outlet, Link } from "react-router-dom";

import SearchBar from "../search-bar/search-bar";
import MercadoLibreLogo from "../../assets/images/mercadolibre-logo.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link to="/">
            <div
              className="header__logo"
              style={{ backgroundImage: `url(${MercadoLibreLogo})` }}
            />
          </Link>

          <SearchBar />
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;

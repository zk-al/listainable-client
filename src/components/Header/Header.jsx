import "./Header.scss";
import SearchBar from "../SearchBar/SearchBar";
import { Link, useNavigate, useLocation } from "react-router-dom";
import backArrow from "../../assets/icons/arrow-sm-left-svgrepo-com.svg";
import logoutIcon from "../../assets/icons/logout-svgrepo-com.svg";
import listIcon from "../../assets/icons/list-svgrepo-com.svg";

function Header({ loginVisible, setLoginVisible }) {
  const nav = useNavigate();
  const location = useLocation();

  const goBack = () => {
    nav(-1);
  };

  const handleLogout = () => {
    setLoginVisible(true);
  };

  return (
    <header className="header">
      <div className="header__wrap">
        <div className="header__logo-wrap">
          {location.pathname !== "/" && (
            <img
              className="header__arrow icon"
              onClick={goBack}
              src={backArrow}
              alt="Back arrow"
            />
          )}
          <Link to="/">
            <h1 className="logo">Listainable</h1>
          </Link>
        </div>
        <SearchBar />
        <nav>
          <ul className="header__list">
            <li>
              <Link to="/list">
                <img className="icon" src={listIcon} alt="List Icon" />
              </Link>
            </li>
            {loginVisible ? null : (
              <li onClick={handleLogout}>
                <img className="icon" src={logoutIcon} alt="Login Icon" />
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

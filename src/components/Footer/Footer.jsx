import "./Footer.scss";
import { Link } from "react-router-dom";
import logoutIcon from "../../assets/icons/logout-svgrepo-com.svg";
import listIcon from "../../assets/icons/list-svgrepo-com.svg";
import homeIcon from "../../assets/icons/home-svgrepo-com.svg";

function Footer({ loginVisible, setLoginVisible }) {
  const handleLogout = () => {
    setLoginVisible(true);
  };

  return (
    <footer className="footer">
      <ul className="mobile">
        <li>
          <Link to="/">
            <img className="icon" src={homeIcon} alt="List Icon" />
          </Link>
        </li>
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
      <div className="footer__info-wrap">
        <p>Listainable all rights reserves</p>
        <p>
          Contains information from OpenFoodFacts, which is made available here
          under the Open Database License (ODbL).
        </p>
      </div>
    </footer>
  );
}

export default Footer;

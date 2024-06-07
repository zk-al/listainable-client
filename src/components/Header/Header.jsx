import "./Header.scss";
import SearchBar from "../SearchBar/SearchBar";

function Header() {
  return (
    <header>
      <a href="#">Back Arrow</a>
      <img src="#" alt="Logo" />
      <SearchBar />
      <nav>
        <ul>
          <li>
            <a href="#">
              <img src="#" alt="List Icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="#" alt="Login Icon" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

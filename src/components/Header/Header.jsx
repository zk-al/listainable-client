import "./Header.scss";

function Header() {
  return (
    <header>
      <a href="#">Back Arrow</a>
      <img src="#" alt="Logo" />
      <input type="search" name="search" id="search" />
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

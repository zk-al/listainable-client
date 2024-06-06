import "./Footer.scss";

function Footer({ handleLogoutSubmit }) {
  return (
    <footer>
      <ul>
        <li>
          <img src="#" alt="Home Icon" />
        </li>
        <li>
          <img src="#" alt="List Icon" />
        </li>
        <li>
          <img onClick={handleLogoutSubmit} src="#" alt="Login Icon" />
        </li>
      </ul>
      <div>
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

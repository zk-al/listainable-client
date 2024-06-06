import "./Login.scss";
import { Link } from "react-router-dom";

function Login({ loginVisible, setLoginVisible }) {
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (
      e.target.username.value === "zack" &&
      e.target.password.value === "password"
    ) {
      setLoginVisible(false);
    }
  };
  return (
    <>
      {loginVisible && (
        <div className="login">
          <form action="submit" onSubmit={handleLoginSubmit}>
            <label>
              Username
              <input type="text" name="username" />
            </label>
            <label>
              Password
              <input type="password" name="password" />
            </label>
            <button type="submit">Login</button>
          </form>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </>
  );
}

export default Login;

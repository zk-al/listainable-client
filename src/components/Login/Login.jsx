import "./Login.scss";
import { Link } from "react-router-dom";

function Login({ loginVisible, setLoginVisible }) {
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.username);
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
            {/* This can just link to the home page until the login actually works */}
            <button type="submit">Login</button>
          </form>

          {/* This btn should show the sign up form below */}
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </>
  );
}

export default Login;

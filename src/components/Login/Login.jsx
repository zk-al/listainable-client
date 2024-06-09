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
          <form className="form" action="submit" onSubmit={handleLoginSubmit}>
            <label className="form__label">
              Username
              <input className="form__input" type="text" name="username" />
            </label>
            <label className="form__label">
              Password
              <input className="form__input" type="password" name="password" />
            </label>
            <button className="form__btn btn" type="submit">
              Login
            </button>
          </form>
          <Link className="login__signup" to="/signup">
            Sign Up
          </Link>
        </div>
      )}
    </>
  );
}

export default Login;

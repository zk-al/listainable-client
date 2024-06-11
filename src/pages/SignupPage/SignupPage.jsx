import "./SignupPage.scss";
import "../../styles/partials/_global.scss";

import { Link, useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sign up successful! Check your email for a validation code.");
    navigate("/");
  };

  return (
    <section className="signUp">
      <h1 className="signUp__header">Listainable</h1>
      <form className="form" action="submit" onSubmit={handleSubmit}>
        <label className="form__label">
          Email
          <input className="form__input" type="text" name="username" />
        </label>
        <label className="form__label">
          Username
          <input className="form__input" type="text" name="username" />
        </label>
        <label className="form__label">
          Password
          <input className="form__input" type="password" name="password" />
        </label>
        <label className="form__label">
          Confirm Password
          <input className="form__input" type="password" name="password" />
        </label>
        <button className="form__btn btn" type="submit">
          Sign Up
        </button>
      </form>
      <Link className="login__signup" to="/">
        Back to Login
      </Link>
    </section>
  );
}

export default SignupPage;

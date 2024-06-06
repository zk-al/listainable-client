import "./Login.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login({ loginVisible, handleLoginSubmit }) {
  return (
    <>
      {loginVisible && (
        <div className="login">
          <form action="submit" onSubmit={handleLoginSubmit}>
            <label>
              Username
              <input type="text" />
            </label>
            <label>
              Password
              <input type="text" />
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

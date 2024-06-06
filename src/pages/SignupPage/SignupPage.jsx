import "./SignupPage.scss";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sign up successful! Check your email for a validation code.");
    navigate("/");
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <label>
        Email
        <input type="text" />
      </label>
      <label>
        Password
        <input type="password" />
      </label>
      <label>
        Confirm Password
        <input type="password" />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupPage;

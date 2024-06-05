import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
// import ListPage from "./pages/ListPage/ListPage";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        {/* <Route path="/list" element={<ListPage />} /> */}
      </Routes>
      <div className="login">
        <form action="submit">
          <label>
            Username
            <input type="text" />
          </label>
          <label>
            Password
            <input type="text" />
          </label>
          {/* This can just link to the home page until the login actually works */}
          <button>Login</button>
        </form>

        {/* This btn should show the sign up form below */}
        <a href="#">Sign Up</a>
        <form action="submit">
          <label>
            Email
            <input type="text" />
          </label>
          <label>
            Password
            <input type="text" />
          </label>
          <label>
            Confirm Password
            <input type="text" />
          </label>
          {/* Alert sign up successful + check email + load login form */}
          <button>Sign Up</button>
        </form>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;

import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import SignupPage from "./pages/SignupPage/SignupPage";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ListPage from "./pages/ListPage/ListPage";

function App() {
  const [loginVisible, setLoginVisible] = useState(true);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginVisible(false);
  };

  const handleLogoutSubmit = (e) => {
    e.preventDefault();
    setLoginVisible(true);
  };

  return (
    <>
      {/* <Header /> */}
      {
        <Login
          handleLoginSubmit={handleLoginSubmit}
          loginVisible={loginVisible}
        />
      }
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
      <Footer handleLogoutSubmit={handleLogoutSubmit} />
    </>
  );
}

export default App;

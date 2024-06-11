import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import SignupPage from "./pages/SignupPage/SignupPage";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ListPage from "./pages/ListPage/ListPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";

function App() {
  const [loginVisible, setLoginVisible] = useState(true);
  const location = useLocation();
  const showLogin = location.pathname !== "/signup";
  return (
    <div className="site-wrap">
      <Header loginVisible={loginVisible} setLoginVisible={setLoginVisible} />
      {showLogin && (
        <Login loginVisible={loginVisible} setLoginVisible={setLoginVisible} />
      )}
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/search-results/:query"
            element={<SearchResultsPage />}
          />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/list" element={<ListPage />} />
        </Routes>
      </div>
      <Footer loginVisible={loginVisible} setLoginVisible={setLoginVisible} />
    </div>
  );
}

export default App;

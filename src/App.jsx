import "./App.scss";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
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
    <>
      <Header loginVisible={loginVisible} setLoginVisible={setLoginVisible} />
      {showLogin && (
        <Login loginVisible={loginVisible} setLoginVisible={setLoginVisible} />
      )}
      <Routes>
        {loginVisible ? (
          <Route path="*" element={<Navigate to="/login" />} />
        ) : (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route
              path="/search-results/:query"
              element={<SearchResultsPage />}
            />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/list" element={<ListPage />} />
          </>
        )}
      </Routes>
      <Footer loginVisible={loginVisible} setLoginVisible={setLoginVisible} />
    </>
  );
}

export default App;

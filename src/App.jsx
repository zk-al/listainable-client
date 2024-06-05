import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import HomePage from "./pages/HomePage/HomePage";
// import ProductPage from "./pages/ProductPage/ProductPage";
// import ListPage from "./pages/ListPage/ListPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/product/:id" element={<ProductPage />} /> */}
        {/* <Route path="/list" element={<ListPage />} /> */}
      </Routes>
      <div className="Login"></div>
      {/* <Footer /> */}
    </>
  );
}

export default App;

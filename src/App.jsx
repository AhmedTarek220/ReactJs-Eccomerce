import "./App.css";

import React, { lazy } from "react";
const Footer = lazy(() => import("./Components/Footer/Footer"));
const NavBar = lazy(() => import("./Components/NavBar/NavBar"));
const Hero = lazy(() => import("./Components/Hero/Hero"));
const Paragraph = lazy(() => import("./Components/Paragraph/Paragraph"));
const Section1 = lazy(() => import("./Components/Section-1/Section1"));
const Section2 = lazy(() => import("./Components/Section-2/Section2"));
const Message = lazy(() => import("./Components/SignUp/SignUp"));
import WishList from "./Components/Pages/WishList";
import Cart from "./Components/Pages/Cart";

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import CategoryPage from "./Components/Pages/Category";
import Products from "./Components/Pages/AllProducts";
import { useEffect, useCallback, Suspense } from "react";
import Checkout from "./Components/Pages/CheckOut";

const ScrollToTop = () => {
  const location = useLocation();
  const scrollToTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [location, scrollToTop]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Section1 />
                <Paragraph />
                <Section2 />
                <Message />
              </>
            }
          />

          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/AllProducts" element={<Products />} />

          <Route path="/WishList" element={<WishList />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/CheckOut" element={<Checkout />} />
        </Routes>

      <Footer />
      </Suspense>
    </Router>
  );
}

export default App;

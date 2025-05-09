import "./App.css";

import  { lazy, Suspense, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

const Hero = lazy(() => import("./Components/Hero/Hero"));
const Paragraph = lazy(() => import("./Components/Paragraph/Paragraph"));
const Section1 = lazy(() => import("./Components/Section-1/Section1"));
const Section2 = lazy(() => import("./Components/Section-2/Section2"));
const Message = lazy(() => import("./Components/SignUp/SignUp"));
const WishList = lazy(() => import("./Components/Pages/WishList"));
const Cart = lazy(() => import("./Components/Pages/Cart"));
const CategoryPage = lazy(() => import("./Components/Pages/Category"));
const Products = lazy(() => import("./Components/Pages/AllProducts"));
const Checkout = lazy(() => import("./Components/Pages/CheckOut"));

import LoadingThreeDotsPulse from "./Spinner/Spinner";

import Login from "./Components/Pages/login";
import SignUp from "./Components/Pages/signUp";








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

      <Suspense fallback={<LoadingThreeDotsPulse />}>
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
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />


        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;

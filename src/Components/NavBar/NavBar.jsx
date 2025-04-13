import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Mobile from "../MobileStyle/Mobile";

function NavBar() {
  const cart = useSelector(state => state.cart || []);
  const wishList = useSelector(state => state.wishList || []);




  return (
    <div className="navbar flex justify-between items-center p-5 bg-white shadow-2xl fixed uppercase z-50 w-full">
      <Link to="/" className="text-3xl mx-auto md:mx-0 ">Karia</Link>


     

      <ul className="lg:flex gap-5 max-w-full hidden" >
        <li>
          <Link to="/WishList" className="text-xl">
            WishList <span className="font-sans">({wishList.length})</span>
          </Link>
        </li>
        <li>
          <Link to="/Cart" className="text-xl">
            Cart <span className="font-sans">({cart.length})</span>
          </Link>
        </li>
      </ul>
      <Mobile />
    </div>
  );
}

export default NavBar;

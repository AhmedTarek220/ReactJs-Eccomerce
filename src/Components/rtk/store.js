import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/product-slice"; 
import cartSlice from "./slices/cart-slice";
import wishList from "./slices/wishList";

const store = configureStore({
  reducer: {
    products: productReducer, 
    cart: cartSlice,
    wishList: wishList
  },
 
});

export { store };

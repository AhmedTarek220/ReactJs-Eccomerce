import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";
const CartLocalStorage = () =>{
    const data = localStorage.getItem('CartProducts')
    return data ? JSON.parse(data) : []
}
export const cartSlice = createSlice({
    initialState: CartLocalStorage(),
    name: 'cartSlice',
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.find((product) => product.id === action.payload.id)
            if (findProduct) {
                findProduct.quantity += 1  
                if (action.payload.quantity > 0) {
                    findProduct.quantity = action.payload.quantity;

                  }
            } else {
                const productClone = { ...action.payload, quantity: 1 } 
                state.push(productClone)
                toast.success(`Product Addedd Succefully`);
            }
            localStorage.setItem("CartProducts", JSON.stringify(state));

        },

        removeFromCart: (state, action) => {
            toast.error(` Product Removed Succefully`);

            const updateCart = state.filter((product) => product.id !== action.payload.id )
            localStorage.setItem("CartProducts", JSON.stringify(updateCart));
            return updateCart;

            
            
        },

        clear: (state) => {
            localStorage.removeItem("CartProducts");
            return []
        }
    }
})

export const { addToCart,  removeFromCart,  clear } = cartSlice.actions
export default cartSlice.reducer

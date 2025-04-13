import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";

const wishListLocalStorage =  () => {
    const data = localStorage.getItem('WishListProducts')
    return data ? JSON.parse(data) : []

}

export const wishList = createSlice({
    initialState: wishListLocalStorage(),
    name: 'wishList',
    reducers: {

        addToWishList: (state, action) => {
            const findProduct = state.find((product) => product.id === action.payload.id)
            if(!findProduct){
                state.push(action.payload)
                toast.success(`Product Addedd To WishList Succefully`);
            }
            localStorage.setItem('WishListProducts' , JSON.stringify(state))
        },

        removeFromWishList: (state, action) => {
            toast.error(` Product Removed From WishList Succefully`);
            const updateState =  state.filter((product) => product.id !== action.payload.id);
            localStorage.setItem('WishListProducts' , JSON.stringify(updateState))
            return updateState;

        },
        clear: (state) => {
            localStorage.removeItem('WishListProducts')
            return []
        }
    }
})

export const { addToWishList,removeFromWishList, clear } = wishList.actions
export default wishList.reducer

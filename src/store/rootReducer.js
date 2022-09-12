import { combineReducers } from "@reduxjs/toolkit"
import cartReducer from "./cart/cartSlice"
import productsReducer from "./menu/menuSlice"

const rootReducer= combineReducers({
    cart: cartReducer,
    products: productsReducer
})

export default rootReducer

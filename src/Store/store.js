import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "./productSlice";
import cartSliceReducer from "./cartSlice";
import userSliceReducer from "./userSlice";

const store = configureStore({
  reducer: {
    products: productSliceReducer,
    cart: cartSliceReducer,
    user: userSliceReducer,
  },
});

export default store;

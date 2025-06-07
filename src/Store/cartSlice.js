import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState:  [],
   
  
  reducers: {
    initializer: (state, action) => {
        return action.payload;
    },
    addItemToCart: (state, action) => {
        state.push(action.payload);
    },
    
    removeItemFromCart: (state, action) => {
        return state.filter(item => item.id !== action.payload);
    },

    clearCart: (state, action) => {
      return [];
    },
  },
});
export default cartSlice.reducer;
export const { initializer, addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
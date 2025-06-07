import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState:  [],
  reducers: {
    initializer: (state, action) => {
        return action.payload;
    },
    addItemToCart: (state, action) => {
     if (!state.some(item => item.id === action.payload.id)) {
        state.push(action.payload);
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },

    removeItemFromCart: (state, action) => {
        const newState = state.filter(item => item.id !== action.payload);
        localStorage.setItem('cart', JSON.stringify(newState));
        return newState;
    },

    clearCart: (state, action) => {
      localStorage.removeItem('cart');
      return [];
    },
  },
});
export default cartSlice.reducer;
export const { initializer, addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
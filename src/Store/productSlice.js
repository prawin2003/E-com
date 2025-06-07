import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [],

  reducers: {
    initializer: (state, action) => {
      return action.payload;
    },
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            ...product.rating,
            ...action.payload
          };
        }
        return product;
      });
    },
  },
});

export default productSlice.reducer;
export const { initializer, addProduct, removeProduct, updateProduct } =
  productSlice.actions;

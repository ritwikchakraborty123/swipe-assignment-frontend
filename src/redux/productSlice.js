import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      } else {
        state.push(action.payload);
      }
    },
    convertAllProdCurr: (state, action) => {
      const conversionRate = action.payload;
      return state.map((product) => ({
        ...product,
        productPrice: product.productPrice * conversionRate,
      }));
    },
    deleteProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addProduct, deleteProduct, convertAllProdCurr } =
  productsSlice.actions;

export const selectProductList = (state) => state.products;

export default productsSlice.reducer;

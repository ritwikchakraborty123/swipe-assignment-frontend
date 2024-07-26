import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "currency",
  initialState: "INR", // Default currency
  reducers: {
    changeCurrency: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeCurrency } = currencySlice.actions;

export const selectCurrency = (state) => state.currency;

export default currencySlice.reducer;

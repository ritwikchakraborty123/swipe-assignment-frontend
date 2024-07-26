import { combineReducers } from "@reduxjs/toolkit";
import currencyReducer from "./currencySlice";
import invoicesReducer from "./invoicesSlice"; // Import your other reducers
import productsReducer from "./productSlice";
const rootReducer = combineReducers({
  invoices: invoicesReducer,
  products: productsReducer,
  currency: currencyReducer,
});

export default rootReducer;

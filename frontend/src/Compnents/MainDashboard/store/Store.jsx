import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../news/NewsSlice";
import MobileBrandReducer from "../Brands/MobileBrandsSlice";

const store = configureStore({
  reducer: {
    news: newsReducer,
    mobileBrands: MobileBrandReducer,
  },
});

export default store;

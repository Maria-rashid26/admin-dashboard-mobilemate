import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileBrands: [],
};

const MobileBrandsSlice = createSlice({
  name: "MobileBrandsSlice",
  initialState,
  reducers: {
    setMobileBrands: (state, action) => {
      state.mobileBrands = action.payload;
    },
  },
});
export const { setMobileBrands } = MobileBrandsSlice.actions;
export default MobileBrandsSlice.reducer;

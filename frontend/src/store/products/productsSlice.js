import { createSlice } from "@reduxjs/toolkit";
import getProducts from "./actions/getProducts";

const initialState = {
  loading: "idle",
  error: null,
  records: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = "successed";
      state.records = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export { getProducts };
export default productsSlice.reducer;

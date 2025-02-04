import { createSlice } from "@reduxjs/toolkit";
import getCategories from "./actions/getCategories";

const initialState = {
  loading: "idle",
  error: null,
  records: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = "successed";
      state.records = action.payload;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export { getCategories };
export default categoriesSlice.reducer;

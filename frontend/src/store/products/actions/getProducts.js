import { createAsyncThunk } from "@reduxjs/toolkit";

const getProducts = createAsyncThunk(
  "products/getProducts",
  async (categorie = "", thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(
        `http://localhost:8000/products?categorie=${categorie}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default getProducts;

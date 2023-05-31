import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: { product: [], isFetching: false, error: false },
  reducers: {
    //get all products
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.product = action.payload;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.product.splice(
        state.product.findIndex((item) => item._id === action.payload)
      );
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateProductSuccess: (state, action) => {
      state.isFetching = false;
      state.product[
        state.product.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    updateProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.product.push(action.payload);
    },
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} = productSlice.actions;

export default productSlice.reducer;

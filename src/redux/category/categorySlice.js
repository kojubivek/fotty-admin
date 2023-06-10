import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getCatStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getCatSuccess: (state, action) => {
      state.isFetching = false;
      state.category = action.payload;
    },
    addCatSuccess: (state, action) => {
      state.isFetching = false;

      state.category.push(action.payload);
    },
    updateCategorySuccess: (state, action) => {
      state.isFetching = false;
      state.product[
        state.product.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    delCatSuccess: (state, action) => {
      state.isFetching = false;
      state.category.splice(
        state.category.findIndex((item) => item._id === action.payload)
      );
    },
    getFailure: (state) => {
      state.error = true;
    },
  },
});

const { actions, reducer } = categorySlice;

export const {
  getCatStart,
  getCatSuccess,
  addCatSuccess,
  getFailure,
  delCatSuccess,
  updateCategorySuccess,
} = actions;

export default reducer;

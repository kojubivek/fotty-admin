import { publicRequest } from "../helper/axiosHelper";
import { userRequest } from "../helper/userRequests";
import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
} from "./productSlice";
import { loginFailure, loginStart, loginSuccess } from "./userSlice";

export const login = (user) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    console.log(res.data);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const getProducts = () => async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    console.log(res.data.products);
    dispatch(getProductSuccess(res.data.products));
  } catch (error) {
    dispatch(getProductFailure());
  }
};
export const deleteProducts = (id) => async (dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    console.log(res.data, "products");
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductFailure());
  }
};
export const updateProducts =
  ({ _id, ...rest }) =>
  async (dispatch) => {
    dispatch(updateProductStart());
    try {
      const res = await userRequest.put(`/products/${_id}`, rest);
      console.log(res.data, "products");
      dispatch(updateProductSuccess({ _id, rest }));
    } catch (error) {
      dispatch(updateProductFailure());
    }
  };
export const addProducts = (product) => async (dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    console.log(res.data, "products");
    dispatch(addProductSuccess(res.data.data));
  } catch (error) {
    dispatch(addProductFailure());
  }
};

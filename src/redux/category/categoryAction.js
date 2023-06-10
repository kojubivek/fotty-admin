import { userRequest } from "../../helper/userRequests";
import {
  addCatSuccess,
  delCatSuccess,
  getCatStart,
  getCatSuccess,
  getFailure,
  updateCategorySuccess,
} from "./categorySlice";

export const postCategory = (obj) => async (dispatch) => {
  dispatch(getCatStart());
  try {
    const res = await userRequest.post("/category", obj);
    console.log(res.data.data, "addcat");
    dispatch(addCatSuccess(res.data.data));
  } catch (error) {
    console.log(error);
    dispatch(getFailure());
  }
};

export const getCategory = () => async (dispatch) => {
  dispatch(getCatStart());
  try {
    const res = await userRequest.get("/category");
    console.log(res.data.data, "getcat");
    dispatch(getCatSuccess(res.data.data));
  } catch (error) {
    dispatch(getFailure());
  }
};

export const delCatById = (id) => async (dispatch) => {
  dispatch(getCatStart());
  try {
    const res = await userRequest.delete(`/category/${id}`);
    console.log(res.data);
    dispatch(delCatSuccess(res.data.data));
  } catch (error) {
    dispatch(getFailure());
  }
};

export const getCategoryById = (categoryId) => async (dispatch) => {
  dispatch(getCatStart());
  try {
    const res = await userRequest.get(`/category/${categoryId}`);
    console.log(res.data.data, "getCatById");
    dispatch(getCatSuccess(res.data.data));
  } catch (error) {
    dispatch(getFailure());
  }
};

export const updateCategory =
  ({ _id, status, name, image }) =>
  async (dispatch) => {
    dispatch(getCatStart());
    console.log(_id);
    try {
      const res = await userRequest.put(`/category/${_id}`, {
        _id,
        status,
        name,
        image,
      });
      console.log(res.data.data, "updateCat");
      dispatch(updateCategorySuccess(res.data.data));
    } catch (error) {
      dispatch(getFailure());
    }
  };

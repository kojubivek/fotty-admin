import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1/";

const Token =
  localStorage.getItem("persist:root") &&
  JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
    ?.currentUser?.accesstoken;

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});

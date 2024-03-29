import { createSlice } from "@reduxjs/toolkit";
import clientUtils from "../../utils/client-utils";

const initialState = {
  loading: false,
  auth: (() => {
    try {
      let data = localStorage.getItem("accessToken") || "";
      if (data) {
        clientUtils.auth = data;
        return data;
      }
    } catch (error) {
      console.log(error);
    }
    return null;
  })(),
  errorMessage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
});

export default authSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import constanDomain from "../../configs/constanDomain";
import clientUtils from "../../utils/client-utils";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import axios from "axios";

const initialState = {
  loading: false,
  user: [],
  errorMessage: null,
};

export const getUsers = createAsyncThunk(
  "users/login",
  async (bodyParamster) => {
    const dataUrl = `${
      constanDomain.DOMAIN_API + constanDomain.PARAMS_USER.LOGIN
    }`;
    const responsive = await axios.post(dataUrl, bodyParamster);
    const dataResposive = responsive.data;
    if (dataResposive.code === 200) {
      localStorage.setItem("accessToken", dataResposive.accessToken);
      localStorage.setItem("refreshtoken", dataResposive.refreshtoken);
    } else
      notification.open({
        message: "Tiêu đề: bị lỗi",
        description: dataResposive.message,
        // onClick: () => {
        //   console.log('Notification Clicked!');
        // },
      });
    return responsive.data;
  }
);

export const signUpUser = createAsyncThunk(
  "user/signup",
  async (bodyParamster) => {
    const dataUrl = `${
      constanDomain.DOMAIN_API + constanDomain.PARAMS_USER.REGISTER
    }`;
    const responsive = await axios.post(dataUrl, bodyParamster);
    return responsive.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = `Opps! Something goes wrong!`;
      });

    // .addCase(signUpUser.pending, (state, action) => {
    //     state.loading = true;
    // })
    // .addCase(signUpUser.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.user = action.payload;
    // })
    // .addCase(signUpUser.rejected, (state, action) => {
    //     state.loading = false;
    //     state.errorMessage = `Opps! Something goes wrong!`;
    // });
  },
});

export default userSlice.reducer;

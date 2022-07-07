import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import clientUtils from "../../utils/client-utils";
import constanDomain from "../../configs/constanDomain";
import { notification } from "antd";
import axios from "axios";


const initialState = {
    loading: false,
    post: [],
    errorMessage: null
};

export const getPost = createAsyncThunk(
    "post/getPost",
    async (thunkApi) => {
        const dataUrl = `${constanDomain.DOMAIN_API + constanDomain.PARAMS_POST.GET_POST}`;
        return axios.get(dataUrl, {
            headers: {
                Authorization: clientUtils.auth
            }
        })
        .then(responsive => {
            return responsive.data
        })
        .catch(error => {
            notification.open({
                message: "Tiêu đề: bị lỗi",
                description: error,
                // onClick: () => {
                //   console.log('Notification Clicked!');
                // },
              });
        })
    }
)


const postSlice = createSlice({
    name: "post",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getPost.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getPost.fulfilled, (state, action) => {
                state.loading = false;
                state.post = action.payload;
            })
            .addCase(getPost.rejected, (state, {payload}) => {
                // debugger
                state.loading = false;
                // state.errorMessage = `Không thể gọi được dữ liệu, vui lòng kiểm tra lại`;
                switch (payload?.status) {
                    case 401:
                        state.errorMessage = `Access denied`; break;
                    case 403:
                        state.errorMessage = `Forbidden`; break;
                    default:
                        state.errorMessage = `none`
                }
            });
    }
});

export default postSlice.reducer;
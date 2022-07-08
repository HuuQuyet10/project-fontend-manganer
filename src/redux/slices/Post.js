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
    async () => {
        const dataUrl = `${constanDomain.DOMAIN_API + constanDomain.PARAMS_POST.GET_POST}`;
        const responsive = await axios.get(dataUrl, {
            headers: {
                Authorization: clientUtils.auth
            }
        });
        return responsive.data;
    }
)


const postSlice = createSlice({
    name: "post",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getPost.pending, (state, action) => {
                state.loading = false;
            })
            .addCase(getPost.fulfilled, (state, action) => {
                state.loading = true;
                state.post = action.payload;
            })
            .addCase(getPost.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = action.error.message || `Không thể gọi được dữ liệu, vui lòng kiểm tra lại`;
            });
    }
});

export default postSlice.reducer;
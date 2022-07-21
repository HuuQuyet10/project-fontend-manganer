import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import clientUtils from "../../utils/client-utils";
import constanDomain from "../../configs/constanDomain";
import { notification } from "antd";
import axios from "axios";


const initialState = {
    loading: false,
    post: [],
    panigatePost: [],
    errorMessage: null
};

export const getPost = createAsyncThunk(
    "post/getPost",
    async (bodyParamster) => {
        const dataUrl = `${constanDomain.DOMAIN_API + constanDomain.PARAMS_POST.GET_POST + `?page=${bodyParamster}&size=10`}`;
        const responsive = await axios.get(dataUrl, {
            headers: {
                Authorization: clientUtils.auth
            }
        });
        return responsive.data;
    }
)

export const getPanigate = createAsyncThunk(
    "post/getPanigate",
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

export const createPost = createAsyncThunk(
    "post/createPost",
    async (bodyParamster) => {
        const dataUrl = `${constanDomain.DOMAIN_API + constanDomain.PARAMS_POST.NEW_POST}`;
        try {
            const responsive = await axios.post(dataUrl, bodyParamster, {
                headers: {
                    Authorization: clientUtils.auth
                }
            });
            const checkData = responsive.data;
            if (checkData.code == 200) {
                notification.open({
                    message: "Tiêu đề: Thành công",
                    description: checkData.status,
                    // onClick: () => {
                    //   console.log('Notification Clicked!');
                    // },
                  });
            }
            return checkData;   
        } catch (err) {
            const customError = {
                name: "Error Axios!!",
                message: err.response.statusText,
                data: err.response.data.error.message // serializable
            };
            console.log(customError, "Error Axios!!");
            notification.open({
                message: "Tiêu đề: Thất bại",
                description: customError.data,
                // onClick: () => {
                //   console.log('Notification Clicked!');
                // },
            });
            document.getElementById("create-course-form").reset();
        }
    }
)


const postSlice = createSlice({
    name: "post" || "panigatePost",
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
            .addCase(getPanigate.fulfilled, (state, action) => {
                state.loading = true;
                state.panigatePost = action.payload;
            })
            .addCase(getPost.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = action.error.message || `Không thể gọi được dữ liệu, vui lòng kiểm tra lại`;
            })

            // redux của thêm mới post 
            .addCase(createPost.rejected, (state, action) => {
                state.loading = false;
                // state.errorMessage = action.error.message || `Không thể thêm dữ liệu`
            })
    }
});

export default postSlice.reducer;
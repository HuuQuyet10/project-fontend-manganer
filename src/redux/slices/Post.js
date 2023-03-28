import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import clientUtils from "../../utils/client-utils";
import constanDomain from "../../configs/constanDomain";
import { message } from "antd";
import axios from "axios";


const initialState = {
    loading: false,
    post: [],
    panigatePost: [],
    dataUser: [],
    errorMessage: null
};


// CALL ALL POST
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

// CALL ONE POST
export const getOnePost = createAsyncThunk(
    "post/getOnePost",
    async (paramsId) => {
        const dataUrl = `${constanDomain.DOMAIN_API + constanDomain.PARAMS_POST.GET_POST + `/${paramsId}`}`;
        const response = await axios.get(dataUrl, {
            headers: {
                Authorization: clientUtils.auth
            }
        });
        return response.data;
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
                message.success('Thêm Thành công');
            }
            return checkData;   
        } catch (err) {
            const customError = {
                name: "Error Axios!!",
                message: err.response.statusText,
                data: err.response.data.error.message // serializable
            };
            console.log(customError, "Error Axios!!");
            message.error('Thêm Thất bại');
            document.getElementById("create-course-form").reset();
        }
    }
)

export const updatePost = createAsyncThunk(
    "posts/update",
    async (bodyParamster) => {
        const dataUrl = `${constanDomain.DOMAIN_API + constanDomain.PARAMS_POST.UPDATE_POST}`;
        try {
            const responsive = await axios.post(dataUrl, bodyParamster, {
                headers: {
                    Authorization: clientUtils.auth
                }
            });
            const checkData = responsive.data;
            if (checkData.code == 200) {
                message.success('Cập Nhật Thành công');
            }
            return checkData;   
        } catch (err) {
            const customError = {
                name: "Error Axios!!",
                message: err.response.statusText,
                data: err.response.data.error.message // serializable
            };
            console.log(customError, "Error Axios!!");
            message.error('Cập Nhật Thất bại');
            document.getElementById("create-course-form").reset();
        }
    }
)

export const deletePost = createAsyncThunk(
    "posts/delete",
    async (bodyParamster) => {
        const dataUrl = `${constanDomain.DOMAIN_API + constanDomain.PARAMS_POST.DELETE_POST + bodyParamster}`;
        try {
            const responsive = await axios.delete(dataUrl, {
                headers: {
                    Authorization: clientUtils.auth
                }
            });
            const checkData = responsive.data;
            if (checkData.code == 200) {
                message.success('Xoá Thành công');
            }
            return checkData;   
        } catch (err) {
            const customError = {
                name: "Error Axios!!",
                message: err.response.statusText,
                data: err.response.data.error.message // serializable
            };
            console.log(customError, "Error Axios!!");
            message.error('Xoá Thất bại');
            document.getElementById("create-course-form").reset();
        }
    }
)


export const editPost = () => createAsyncThunk(
    "post/editPost",
    async () => {
        const dataUrl = `${constanDomain.DOMAIN_API + constanDomain.PARAMS_POST.NEW_POST}`;
    }
)
// ngoài việc call api bằng createAsync để call api, sau đó dùng extraReducer để payload cái action đó vào trong store, rồi bên client select cái store và lấy ra data
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
            .addCase(getOnePost.fulfilled, (state, action) => {
                state.loading = true;
                state.dataUser = action.payload;
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

            // redux của cập nhật post
            .addCase(updatePost.rejected, (state, action) => {
                state.loading = false;
            })

            // redux của xoá post
            .addCase(deletePost.rejected, (state, action) => {
                state.loading = false;
                const todoId = action.payload
                return state.filter(todo => todo.id !== todoId)
            })
    }
});

export default postSlice.reducer;
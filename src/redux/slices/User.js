import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import constanDomain from "../../configs/constanDomain";
import axios from "axios";

const initialState = {
    loading: false,
    users: [],
    errorMessage: null
};

export const getUsers = createAsyncThunk("users/login", async (bodyParamster) => {
    const dataUrl = `${constanDomain.DOMAIN_API + constanDomain.PARAMS_USER.LOGIN}`;
    const responsive = await axios.post(dataUrl, bodyParamster);
    const dataResposive = responsive.data;
    if (dataResposive.code === 200) {
        localStorage.setItem("accessToken", dataResposive.accessToken);
        localStorage.setItem("refreshtoken", dataResposive.refreshtoken);
    } else (
        console.log(`lỗi: ${dataResposive.message}` )
    )
    return responsive.data;
})


const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = `Opps! Something goes wrong!`;
            });
    }
});

export default userSlice.reducer;
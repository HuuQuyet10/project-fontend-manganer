import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useNavigate } from "react-router-dom";
import DomainServer from 'src/utils/DomainServer';
import axios from 'axios';

const initialState = {
  loading: false,
  users: [],
  errorMessage: null,
};
export const getUsers = createAsyncThunk('users/login', async (bodyParamster) => {
  const dataUrl = `${DomainServer.GET_SERVICE + DomainServer.PARAMASTER.LOGIN}`;
  const response = await axios.post(dataUrl, bodyParamster);
  return response;
});

const userListSlice = createSlice({
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
        state.errorMessage = `Oops! Something goes wrong!`;
      });
  },
});
export default userListSlice.reducer;

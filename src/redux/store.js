import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/User";
import AuthReducer from "./slices/auth";

export const store = configureStore({
    reducer: {
        user: UserReducer,
        auth: AuthReducer
    }
})
import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/User";
import AuthReducer from "./slices/auth";
import PostReducer from "./slices/Post";

export const store = configureStore({
    reducer: {
        user: UserReducer,
        auth: AuthReducer,
        post: PostReducer,
    }
})
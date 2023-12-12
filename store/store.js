import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slices/modalSlice.js";
import loginmodalSlice from "./slices/loginSlice/loginmodalSlice.js";
import userSlice from './slices/User/UserSlice.js'
import profileSlice from './slices/ProfileSlice/ProfileSlice'

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    loginmodal: loginmodalSlice,
    user: userSlice,
    profile: profileSlice,
  },
});

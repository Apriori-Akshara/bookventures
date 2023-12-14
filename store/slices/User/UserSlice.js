import { createSlice } from "@reduxjs/toolkit"
import cookie from "js-cookie";

const initialState = {
  user: {
  id:cookie.get('id'),
  username: cookie.get('username'),
  email: cookie.get('email'),
  img: cookie.get('img'),
  password: '',
  phone: '',
  jwt:cookie.get('jwt')
  },
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Signinsuccess: (state,action) => {
      state.user = action.payload;
    },
    DeleteUser: (state,action) => {
      state.user = action.payload;
    }
  }
})

export const { Signinsuccess, DeleteUser } =  userSlice.actions

export default userSlice.reducer
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: false,
}

export const loginmodalSlice = createSlice({
  name: "loginmodal",
  initialState,
  reducers: {
    truecy: (state) => {
      state.value = true
    },
    falcey: (state) => {
      state.value = false
    }
  }
})

// A small helper of user state for `useSelector` function.
export const getmodalState = state => state.value

// Exports all actions
export const { truecy, falcey } = loginmodalSlice.actions

export default loginmodalSlice.reducer
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: false,
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    truethy: (state) => {
      state.value = true
    },
    falsey: (state) => {
      state.value = false
    }
  }
})

// A small helper of user state for `useSelector` function.
export const getmodalState = state => state.value

// Exports all actions
export const { truethy, falsey } = modalSlice.actions

export default modalSlice.reducer
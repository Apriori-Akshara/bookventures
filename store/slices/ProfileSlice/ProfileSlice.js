import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: false,
}

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    tiru: (state) => {
      state.value = true
    },
    falsch: (state) => {
      state.value = false
    }
  }
})

// A small helper of user state for `useSelector` function.
export const getmodalState = state => state.value

// Exports all actions
export const { tiru, falsch } = profileSlice.actions

export default profileSlice.reducer
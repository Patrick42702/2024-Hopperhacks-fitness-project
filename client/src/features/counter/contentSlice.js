import { createSlice } from "@reduxjs/toolkit";

export const contentSlice = createSlice({
  name: 'content',
  initialState: {
    status: "welcome"
  },
  reducers: {
    to_welcome: (state) => {
      state.status = "welcome"
    },
    to_add_workout: (state) => {
      state.status = "add_workout"
    },
  },
})

export const {to_add_workout, to_welcome} = contentSlice.actions;

export default contentSlice.reducer
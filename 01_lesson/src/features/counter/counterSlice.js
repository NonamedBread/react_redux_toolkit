import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ddd: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.ddd += 1;
    },
    decrement: (state) => {
      state.ddd -= 1;
    },
    reset: (state) => {
      state.ddd = 0;
    },
    incrementByAmount: (state, action) => {
      state.ddd += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;

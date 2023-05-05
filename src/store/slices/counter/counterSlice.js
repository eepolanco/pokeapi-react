import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    counter: 10
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
        state.counter -= 1;
    },
    incrementBy: (state, action) => {
        state.counter += action.payload
    },
    resetCounter: (state) => {
        state.counter = initialState.counter
    }
  }
})

  

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy, resetCounter } = counterSlice.actions;
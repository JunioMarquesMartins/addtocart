import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
  name: 'cart',
  initialState: {
    data: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload)
      state.data.push(action.payload)
      console.log(state.data[0])
    },
  },
})

export const { addToCart } = cart.actions
export const selectCart = (state) => state.cart.data

export default cart.reducer

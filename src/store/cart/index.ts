import { createSlice, original } from '@reduxjs/toolkit'

export const cart = createSlice({
  name: 'cart',
  initialState: {
    data: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const productIndex = original(state).data.findIndex(
        (item) => item.id === action.payload.id,
      )
      if (productIndex !== -1) state.data.splice(productIndex, 1)
      state.data.push(action.payload)
    },
  },
})

export const { addToCart } = cart.actions
export const selectCart = (state) => state.cart.data

export default cart.reducer

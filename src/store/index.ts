import { configureStore } from '@reduxjs/toolkit'

import productsReducer from './products/'
import cartReducer from './cart/'

export default configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
})

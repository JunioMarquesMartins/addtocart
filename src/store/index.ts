import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './counter/'
import prooductsReducer from './products/'

export default configureStore({
  reducer: {
    counter: counterReducer,
    products: prooductsReducer,
  },
})

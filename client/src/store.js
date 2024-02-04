import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import contentReducer from './features/counter/contentSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    content: contentReducer
  },
})
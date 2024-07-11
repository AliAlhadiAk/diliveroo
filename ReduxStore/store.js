import { configureStore, createStore } from "@reduxjs/toolkit";
import basketReducer from './Slices/basketslice'

const store = configureStore({
    reducer:{
      basket:basketReducer
    }
})
export default store
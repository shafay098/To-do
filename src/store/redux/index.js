import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import FormDataSlice from './slices/FormDataSlice'
import ModelSlice from './slices/ModelSlice'

const Store = configureStore({
    reducer:{
        formdata:FormDataSlice.reducer,
        Model:ModelSlice
    },
})
export default Store
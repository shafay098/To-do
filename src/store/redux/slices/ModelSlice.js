import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import React from 'react'

const ModelSlice = createSlice({
    name:'ModelSlice',
    initialState:{
        isModalOpen : false,
        Erorr:null,
        ModelSocket: true
    },
    reducers:{
        ModelSocketSettingForForm(state,action){
            state.ModelSocket = false
        },
        ModelSocketSettingForTodo(state,action){
            state.ModelSocket = true
        },

        showModal(state,action){
        state.isModalOpen = true
        },
        closeModal(state,action){
        state.isModalOpen = false
        }
    }
})

export default ModelSlice.reducer
export {ModelSlice as Model_Action} 



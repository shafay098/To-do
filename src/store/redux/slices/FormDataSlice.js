import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import React from 'react'

// const axios = require('axios');

export const Update_Form_data = createAsyncThunk('UpdateFormData', async(id,updateddata)=>{
    fetch(`https://dummyjson.com/products/${id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'iPhone Galaxy +1'
  })
})
.then(res => res.json())
.then(console.log);
})

export const Delete_Form_data = createAsyncThunk('DeleteFormData', async(id)=>{
    const response = await fetch(`https://654497eb5a0b4b04436c8f77.mockapi.io/crud/${id}`,{
        method: 'DELETE',
    })
    try{
        const result = await response.json()
        return result
    }catch(erorr){
        return erorr
    }


})


export const Get_Form_Data_Async = createAsyncThunk('GetFormData', async()=>{
    const response = await fetch('https://654497eb5a0b4b04436c8f77.mockapi.io/crud')
    try{
        const result = await response.json()
        return result
    }catch(erorr){
        return erorr
    }

})

export const Form_Data_async = createAsyncThunk('SendFormData', async (data, { rejectWithValue }) => {
    const response = await fetch("https://654497eb5a0b4b04436c8f77.mockapi.io/crud", {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        const result = await response.json()
        return result
    } catch (erorr) {
        return rejectWithValue(erorr)
     }
})

const FormDataSlice = createSlice({
    name: 'FormData',
    initialState: {
        Form_Data: [],
        loading: false,
        erorr: null,
        editid:null,
    },
    reducers:{
        DeleteFunctionality(state,action){
            console.log(state.Form_Data)
            const updatedData = state.Form_Data.filter(item => item.id !== action.payload);
            state.Form_Data = updatedData 
            console.log(updatedData)
            console.log(state.Form_Data)
        },
        EditFunctionality(state,action){
            state.editid = action.payload
            console.log(state.editid)
        },
    },

    extraReducers:{
      
        [Get_Form_Data_Async.fulfilled]:(state,action)=>{
            state.Form_Data = action.payload
            console.log('pushed data to state')
            console.log(state)
            state.loading = true;
        },
        [Get_Form_Data_Async.pending]:(state,action)=>{
            state.loading = false;
        },


        //form data async

        [Form_Data_async.pending] : (state,action)=>{
            state.loading = false;
        },
     
        [Form_Data_async.fulfilled] : (state,action)=>{
            state.PostResult = action.payload
            state.loading = true;
        },

        // delete data 

        [Delete_Form_data.pending] : (state,action)=>{
            state.loading = false
        },

        [Delete_Form_data.fulfilled] : (state,action)=>{
            const updatedData = state.Form_Data.filter(item => item.id !== action.payload.id);
            state.Form_Data = updatedData
            state.loading = true
        }
     
    },
})

// create action 



export default FormDataSlice 

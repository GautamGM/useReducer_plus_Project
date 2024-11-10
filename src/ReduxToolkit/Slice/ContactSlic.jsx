import { createSlice } from "@reduxjs/toolkit";

const contactSlice=createSlice({
    name:"Contact",
    initialState:[],

    reducers:{
        // Add Contact
        addContact(state,action){
           state.push(action.payload)
        },

        // update/Edit
        updateContact(state,action){
            // 
        },

        // Remove Contact
        removeContact(state,action){
            // 
        }
    }
})

export const contactReducer=contactSlice.reducer
export const {addContact}=contactSlice.actions

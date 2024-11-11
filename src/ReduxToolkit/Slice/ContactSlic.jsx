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
            const updateContact=state.filter((data)=>data.id!==action.payload)
           return updateContact
        }
    }
})

export const {addContact,removeContact}=contactSlice.actions
export const contactReducer=contactSlice.reducer

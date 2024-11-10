import { configureStore } from "@reduxjs/toolkit";
import { contactReducer,addContact } from "../Slice/ContactSlic";
import { string } from "yup";
const store=configureStore({
    reducer:{
        contacts:contactReducer
    }
})

export default store
 console.log(store.getState(),"store")
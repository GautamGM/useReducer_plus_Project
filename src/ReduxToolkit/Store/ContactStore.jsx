import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactReducer,addContact,removeContact } from "../Slice/ContactSlic";

// reducer of the contact
const rootReducer=combineReducers({
    contact:contactReducer
})
// configure the store of contact
const store=configureStore({
    reducer:rootReducer
})

export {store,addContact,removeContact}



 
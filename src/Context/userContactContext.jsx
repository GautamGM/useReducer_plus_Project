import { createContext ,useReducer,useContext} from "react";
import { userContactReducer,USER_DATA } from "../Reducers/ContactReducer";
const UserDataContext=createContext();

export const UserDataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userContactReducer, []); // initial state as empty array
    return (
        <UserDataContext.Provider value={{ state, dispatch, USER_DATA }}>
            {children}
        </UserDataContext.Provider>
    );
};

export const useUserData = () => {
    return useContext(UserDataContext);
};
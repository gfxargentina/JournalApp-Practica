import { createStore, combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";

//aqui se agregan las nuevas funcionalidades
const reducers = combineReducers({
    auth: authReducer
})

export const store = createStore(reducers);
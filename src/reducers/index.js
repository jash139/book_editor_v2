import { combineReducers } from "redux";

import toggleReadMode from "./toggleReadMode";
import toggleRegisterModalState from "./toggleRegisterModalState";

import getAllBooks from "./bookReducers/getAllBooks";

import getUserDetails from "./userReducers/getUserDetails";

const rootReducer = combineReducers({

    toggleReadMode,
    toggleRegisterModalState,

    getAllBooks,

    getUserDetails,

});

export default rootReducer;
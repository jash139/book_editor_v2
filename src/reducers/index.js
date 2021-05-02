import { combineReducers } from "redux";

import toggleReadMode from "./toggleReadMode";

import getAllBooks from "./bookReducers/getAllBooks";

import getUserDetails from "./userReducers/getUserDetails";
import patchUserDetails from "./userReducers/patchUserDetails";

const rootReducer = combineReducers({

    toggleReadMode,

    getAllBooks,

    getUserDetails,
    patchUserDetails,

});

export default rootReducer;
import { combineReducers } from "redux";

import toggleReadMode from "./toggleReadMode";

import getAllBooks from "./bookReducers/getAllBooks";

import getUserDetails from "./userReducers/getUserDetails";

const rootReducer = combineReducers({

    toggleReadMode,

    getAllBooks,

    getUserDetails,

});

export default rootReducer;
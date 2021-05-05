import { combineReducers } from "redux";

import toggleReadMode from "./toggleReadMode";

import getAllBooks from "./bookReducers/getAllBooks";
import getActiveEditBook from "./bookReducers/getActiveEditBook";

import getAllChapters from "./chapterReducers/getAllChapters";

import getUserDetails from "./userReducers/getUserDetails";
import patchUserDetails from "./userReducers/patchUserDetails";

const rootReducer = combineReducers({

    toggleReadMode,

    getAllBooks,
    getActiveEditBook,

    getAllChapters,

    getUserDetails,
    patchUserDetails,

});

export default rootReducer;
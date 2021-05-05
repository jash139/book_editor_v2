import { combineReducers } from "redux";

import toggleReadMode from "./toggleReadMode";

import getAllBooks from "./bookReducers/getAllBooks";
import getActiveEditBook from "./bookReducers/getActiveEditBook";

import getBookChapters from "./chapterReducers/getBookChapters";

import getUserDetails from "./userReducers/getUserDetails";
import patchUserDetails from "./userReducers/patchUserDetails";

const rootReducer = combineReducers({

    toggleReadMode,

    getAllBooks,
    getActiveEditBook,

    getBookChapters,

    getUserDetails,
    patchUserDetails,

});

export default rootReducer;
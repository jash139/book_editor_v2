import { SAVE_NEW_BOOK } from "../../actions/types";

const initialState = {};

function saveNewBook(state = initialState, action) {
    switch (action.type) {
        case SAVE_NEW_BOOK:
            const results = action.payload.data;
            return {
                ...results
            }
        default:
            return state;
    }
}

export default saveNewBook;
import { GET_ACTIVE_EDIT_BOOK } from "../../actions/types";

const initialState = {};

function getActiveEditBook(state = initialState, action) {
    switch (action.type) {
        case GET_ACTIVE_EDIT_BOOK:
            const results = action.payload.data;
            return {
                ...results
            }
        default:
            return state;
    }
}

export default getActiveEditBook;
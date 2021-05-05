import { GET_BOOK_CHAPTERS } from "../../actions/types";

const initialState = [];

function getBookChapters(state = initialState, action) {
    switch (action.type) {
        case GET_BOOK_CHAPTERS:
            const results = action.payload.data;
            return [
                ...results
            ];
        default:
            return state;
    }
}

export default getBookChapters;
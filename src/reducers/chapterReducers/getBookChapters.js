import { GET_BOOK_CHAPTERS } from "../../actions/types";
import sortChapters from "../../functions/sortChapters";

const initialState = [];

function getBookChapters(state = initialState, action) {
    switch (action.type) {
        case GET_BOOK_CHAPTERS:
            const results = sortChapters(action.payload.data);
            return [
                ...results
            ];
        default:
            return state;
    }
}

export default getBookChapters;
import { GET_ALL_BOOKS } from "../../actions/types";

const initialState = [];

function getAllBooks(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_BOOKS:
            const results = action.payload.data;
            return [
                ...results
            ];
        default:
            return state;
    }
}

export default getAllBooks;
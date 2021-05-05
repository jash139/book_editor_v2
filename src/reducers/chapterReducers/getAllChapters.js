import { GET_ALL_CHAPTERS } from "../../actions/types";

const initialState = [];

function getAllChapters(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_CHAPTERS:
            const results = action.payload.data;
            return [
                ...results
            ];
        default:
            return state;
    }
}

export default getAllChapters;
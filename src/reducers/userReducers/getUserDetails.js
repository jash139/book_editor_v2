import { GET_USER_DETAILS } from "../../actions/types";

const initialState = {};

function getUserDetails(state = initialState, action) {
    switch (action.type) {
        case GET_USER_DETAILS:
            const results = action.payload.data;
            return {
                ...results
            };
        default:
            return state;
    }
}

export default getUserDetails;
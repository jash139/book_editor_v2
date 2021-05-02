import { PATCH_USER_DETAILS } from "../../actions/types";

const initialState = {};

function patchUserDetails(state = initialState, action) {
    switch (action.type) {
        case PATCH_USER_DETAILS:
            const results = action.payload.data;
            return {
                ...results
            }
        default:
            return state;
    }
}

export default patchUserDetails;
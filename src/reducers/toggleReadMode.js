import { SET_READ_MODE_DARK, SET_READ_MODE_LIGHT } from "../actions/types";

const initialState = {
    type: "LIGHT"
};

function setReadMode(state = initialState, action) {
    switch (action.type) {
        case SET_READ_MODE_LIGHT:
            return {
                type: "LIGHT"
            }
        case SET_READ_MODE_DARK:
            return {
                type: "DARK"
            }
        default:
            return state;
    }
}

export default setReadMode;
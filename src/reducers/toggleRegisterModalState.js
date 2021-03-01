import { SET_REGISTER_MODAL_OPEN, SET_REGISTER_MODAL_CLOSE } from "../actions/types";

const initialState = {
    type: "CLOSE"
};

function setRegisterModalState(state = initialState, action) {
    switch (action.type) {
        case SET_REGISTER_MODAL_OPEN:
            return {
                type: "OPEN"
            }
        case SET_REGISTER_MODAL_CLOSE:
            return {
                type: "CLOSE"
            }
        default:
            return state;
    }
}

export default setRegisterModalState;
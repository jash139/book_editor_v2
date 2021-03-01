import { SET_REGISTER_MODAL_OPEN, SET_REGISTER_MODAL_CLOSE } from "./types";

const toggleRegisterModalState = type => ({
    type: type === "OPEN" ? SET_REGISTER_MODAL_OPEN : SET_REGISTER_MODAL_CLOSE
});

export default toggleRegisterModalState;
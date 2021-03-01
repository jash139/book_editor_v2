import { SET_READ_MODE_LIGHT, SET_READ_MODE_DARK } from "./types";

const toggleReadMode = type => ({
    type: type === "DARK" ? SET_READ_MODE_DARK : SET_READ_MODE_LIGHT
});

export default toggleReadMode;
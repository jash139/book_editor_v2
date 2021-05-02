import axios from "axios";
import { PATCH_USER_DETAILS } from "../types";

const response = payload => ({
    type: PATCH_USER_DETAILS,
    payload
});

const patchUserDetails = (id, patchObj) => {
    return dispatch => {
        axios.patch(process.env.REACT_APP_BACKEND_HOST_URL + "/users/" + id)
            .then(res => console.log(res))
            .catch(error => console.log(error));
    }
}

export default patchUserDetails;
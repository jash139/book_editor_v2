import axios from "axios";
import { GET_USER_DETAILS } from "../types";

const userDetails = payload => ({
    type: GET_USER_DETAILS,
    payload
});

const getUserDetails = (uid) => {
    return dispatch => {
        axios.get(process.env.REACT_APP_BACKEND_HOST_URL + "/user/uid/" + uid)
            .then(user => dispatch(userDetails(user)))
            .catch(error => console.log(error));
    }
}

export default getUserDetails;
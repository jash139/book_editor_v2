import axios from "axios";
import { GET_ALL_CHAPTERS } from "../types";

const chapters = payload => ({
    type: GET_ALL_CHAPTERS,
    payload
});

const getAllChapters () => {
    return dispatch => {
        axios.get(process.env.REACT_APP_BACKEND_HOST_URL + "/chapters/")
            .then(response => dispatch(chapters(response)))
            .catch(error => console.log(error));
    }
};

export default getAllChapters;
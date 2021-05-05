import axios from "axios";
import { GET_BOOK_CHAPTERS } from "../types";

const chapters = payload => ({
    type: GET_BOOK_CHAPTERS,
    payload
});

const getBookChapters = (id) => {
    return dispatch => {
        axios.get(process.env.REACT_APP_BACKEND_HOST_URL + "/chapters/book/" + id)
            .then(response => dispatch(chapters(response)))
            .catch(error => console.log(error));
    }
};

export default getBookChapters;
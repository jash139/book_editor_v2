import axios from "axios";
import { GET_ACTIVE_EDIT_BOOK } from "../types";

const activeBook = payload => ({
    type: GET_ACTIVE_EDIT_BOOK,
    payload
});

const getActiveEditBook = (id) => {
    return dispatch => {
        axios.get(process.env.REACT_APP_BACKEND_HOST_URL + "/books/" + id)
            .then(book => dispatch(activeBook(book)))
            .catch(error => console.log(error));
    }
};

export default getActiveEditBook;
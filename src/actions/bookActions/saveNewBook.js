import axios from "axios";
import { SAVE_NEW_BOOK } from "../types";

const response = payload => ({
    type: SAVE_NEW_BOOK,
    payload
});

const saveNewBook = (newBook) => {
    return dispatch => {
        axios.post(process.env.REACT_APP_BACKEND_HOST_URL + "/books/", newBook)
            .then(res => dispatch(response(res)))
            .catch(error => console.log(error));
    }
};

export default saveNewBook;
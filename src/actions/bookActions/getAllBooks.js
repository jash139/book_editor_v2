import axios from "axios";
import { GET_ALL_BOOKS } from "../types";

const books = payload => ({
    type: GET_ALL_BOOKS,
    payload
});

const getAllBooks = () => {
    return dispatch => {
        axios.get(process.env.REACT_APP_BACKEND_HOST_URL + "/")
            .then(bookList => dispatch(books(bookList)))
            .catch(error => console.log(error));
    }
}

export default getAllBooks;
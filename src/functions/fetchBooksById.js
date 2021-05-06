import axios from "axios";

const fetchBooksById = (ids) => {
    const results = [];
    ids.forEach(id => {
        axios.get(process.env.REACT_APP_BACKEND_HOST_URL + "/bools" + id)
            .then(response => results.push(response.data))
            .catch(error => console.log(error));
    });
    return results;
};

export default fetchBooksById;
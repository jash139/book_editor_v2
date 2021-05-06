import axios from "axios";

const fetchBooksById = (ids) => {
    let results = [];
    if (ids) {
        ids.forEach(id => {
            axios.get(process.env.REACT_APP_BACKEND_HOST_URL + "/books/" + id)
                .then(response => results.push(response.data))
                .catch(error => console.log(error));
        });
    }
    return results;
};

export default fetchBooksById;
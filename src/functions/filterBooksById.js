const filterBooksById = (books, ids) => {
    let results = books.filter(book => ids.includes(book._id));
    return results;
};

export default filterBooksById;
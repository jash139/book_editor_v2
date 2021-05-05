const filterBooksByGenre = (books, genre) => {
    let results = books.filter(book => book.genres.includes(genre));
    return results;
};

export default filterBooksByGenre;
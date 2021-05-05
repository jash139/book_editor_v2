function compare(chapter1, chapter2) {
    if (chapter1.chapterNumber < chapter2.chapterNumber) {
        return -1;
    }
    if (chapter1.chapterNumber > chapter2.chapterNumber) {
        return 1;
    }
    return 0;
}

function sortChapters(chapters) {
    return chapters.sort(compare);
}

export default sortChapters;
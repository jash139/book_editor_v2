const trimString = (originalString, finalLength) => {
    if (finalLength && finalLength <= originalString.length) {
        return originalString.substring(0, finalLength - 3) + "...";
    } else {
        return originalString;
    }
}

export default trimString;
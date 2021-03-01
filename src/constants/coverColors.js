const colorCombinations = [
    {
        backgroundColor: "#9B0000",
        color: "#FFFFFE"
    },
    {
        backgroundColor: "#383838",
        color: "#FAFF00"
    },
    {
        backgroundColor: "#00639B",
        color: "#FFFFFE"
    },
    {
        backgroundColor: "#DE0000",
        color: "#FAFF00"
    },
    {
        backgroundColor: "#039B00",
        color: "#FFFFFE"
    },
    {
        backgroundColor: "#FFF500",
        color: "#000000"
    },
    {
        backgroundColor: "#00DEDE",
        color: "#FFFFFE"
    },
    {
        backgroundColor: "#85009B",
        color: "#FFFFFE"
    }
];

function coverColors() {
    const randomIndex = Math.floor(Math.random() * colorCombinations.length);
    return colorCombinations[randomIndex];
}

export default coverColors;
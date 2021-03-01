import React from "react";

import "./ScrollDownIndicator.css";

import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";

function ScrollDownIndicator() {
    return (
        <ExpandMoreRoundedIcon className="scroll-down-icon" style={{ fontSize: "5rem" }} />
    );
}

export default ScrollDownIndicator;
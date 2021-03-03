import React, { useState } from "react";
import { connect } from "react-redux";
import Switch from "react-switch";

import toggleReadMode from "../../actions/toggleReadMode";

import themeColors from "../../constants/themeColors";

import DaySVG from "../SVGs/DaySVG";
import NightSVG from "../SVGs/NightSVG";


function ToggleSwitch(props) {

    const [switchChecked, setSwitchChecked] = useState(false);

    const handleChange = () => {
        props.toggleReadMode(switchChecked ? "LIGHT" : "DARK");
        setSwitchChecked(prevValue => !prevValue);
    };

    return (
        <label>
            <Switch
                onChange={handleChange}
                checked={switchChecked}
                boxShadow="none"
                activeBoxShadow="none"
                height={30}
                width={57.5}
                offColor={themeColors.grey}
                onColor={themeColors.black}
                uncheckedIcon={<div style={{ padding: "0.1rem" }}><DaySVG /></div>}
                checkedIcon={<div style={{ padding: "0.15rem 0 0 0.1rem" }}><NightSVG /></div>}
            />
        </label>
    );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { toggleReadMode })(ToggleSwitch);
import React from "react";
import "./styles.css"

export const PlayButton = ({label, onClick}) => {

    return (
        <button className="Button" onClick={onClick}>{label}</button>
    )
}
import React from "react";
import "./styles.css"

export const AddButton = ({label, onClick}) => {

    return (
        <button className="Button addButton" onClick={onClick}>{label}</button>
    )
}
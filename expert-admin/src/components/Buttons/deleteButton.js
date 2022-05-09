import React from "react";
import "./styles.css"

export const DeleteButton = ({label, onClick}) => {

    return (
        <button className="Button" onClick={onClick}>{label}</button>
    )
}
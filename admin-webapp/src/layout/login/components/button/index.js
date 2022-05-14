import React from "react";
import "./styles.css"

export const Button = ({label, onClick}) => {

    return (
        <button onClick={onClick} className="app-button">{label}</button>
    )
}
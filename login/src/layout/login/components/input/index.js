import React, {useState} from "react";
import "./styles.css"
import EyeImage from "../../assets/images/eye.png";
import Invisible from "../../assets/images/invisible.png"

export const Input = ({placeholder, type, onChange}) => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <div className="input-container">
            {type === "password" ?
                <>
                <input onChange={onChange} type={passwordVisible ? "text" : "password"} className="input-field" placeholder={placeholder}/>
                <img src={passwordVisible ? EyeImage : Invisible} className="password-show-button"
                     onClick={() => setPasswordVisible(!passwordVisible)}/>
                </>
                : <input onChange={onChange} className={"input-field"} placeholder={placeholder} type={type} />
            }
        </div>
    )
}
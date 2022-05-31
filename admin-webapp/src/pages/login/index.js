import {Input} from "../../layout/login/components/input";
import {Button} from "../../layout/login/components/button";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import './styles.css';
import {loginUser} from "../../webapi/auth";
import {useCookies} from "react-cookie";

export const LoginPage = () => {
    const navigate = useNavigate();
    const [submitData, setSubmitData] = useState({});
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [_, setCookie] = useCookies();

    const onSubmit = () => {
        if(submitData.username && submitData.password){
            setError(null);
            setResponse(null)
            loginUser({email: submitData.username, password: submitData.password}).then((res) => {
                setError(null)
                setResponse(res)
            }).catch((e) => {
                setError(e.response.data);
                setResponse(null);
            })
        }
    }

    useEffect(() => {
        if(response){
            setCookie('fiiHealthyToken', response.token)
            navigate('/users-dashboard')
        }
    }, [response])

    return (
        <div className="app-container">
            <div className="login-form-container">
                <div className="logo">
                    <img className="style-logo" src="logo-image.png" alt="logo"/>
                    <p>
                        FII Healthy
                    </p>
                </div>
                <div className="login-form">
                    <div className="login-form-header">
                        <div className="header-title">Sign in</div>
                        <div className="header-subtitle">Sign in to access your Account</div>
                    </div>
                    <Input placeholder={'Username'} type={"text"}
                           onChange={(event) => setSubmitData({...submitData, username: event.target.value})}
                    />
                    {error?.errors?.email &&
                        <div className="error-message">{error.errors.email[0]}</div>
                    }
                    <Input placeholder={'Password'} type={"password"}
                           onChange={(event) => setSubmitData({...submitData, password: event.target.value})}
                    />
                    {error?.errors?.password &&
                        <div className="error-message">{error.errors.password[0]}</div>
                    }
                    {error && !error.errors &&
                        <div className="error-message">{error}</div>
                    }

                    <Button label={'Sign in'} onClick={onSubmit}/>
                </div>
                <div className="login-form-footer">
                    <div className="footer-text">
                        <a href="">Forgot password?</a>
                    </div>
                    <div className="footer-text">
                        Don't have an account? <a href="">Sign up!</a>
                    </div>
                </div>
            </div>
            <div className="background-image">
                <img src="medical-photo.png" alt="DNA picture"/>
            </div>
        </div>
    );
}
import React from "react";
import {UsersTable} from "../../layout/users-dashbaord/components/usersTable";
import './styles.css'
import {Button} from "antd";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

export const UsersDashboardPage = () => {

    const [cookie, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();

    const logOut = () => {
        removeCookie('fiiHealthyToken');
        navigate('/login');
    }

    return (
        <div className={'user-table-page'}>
            <Button className="log-out-button" onClick={logOut} >Log out</Button>
            <div className="table-title-container">
                <p>Users dashboard</p>
                <div className="table-link">
                    <a href="/recordings-dashboard">Recordings</a>
                </div>
            </div>
            <div className={'user-table-container'}>
                <UsersTable/>
            </div>
        </div>
    )
}
import React from "react";
import {UsersTable} from "../../layout/users-dashbaord/components/usersTable";
import './styles.css'

export const UsersDashboardPage = () => {

    return (
        <div className={'user-table-page'}>
            <div className={'page-title'}>Users Dashboard</div>
            <div className={'user-table-container'}>
                <UsersTable/>
            </div>
        </div>
    )
}
import React, {useEffect, useState} from "react";
import styles from './styles.css';
import Table from "../../layout/recordings-dashboard/components/Table";
import recordingsData from '../../layout/recordings-dashboard/data/recordings'
import {getRecordings} from "../../webapi/users";
import {Button} from "antd";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

export const RecordingsDashboardPage = () => {
    const [recordings] = useState([...recordingsData]);
    const navigate = useNavigate();

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [cookie, setCookie, removeCookie] = useCookies(["fiiHealthyToken"])

    const logOut = () => {
        removeCookie('fiiHealthyToken');
        navigate('/login');
    }

    useEffect(() => {
        getRecordings().then((res) => {
            setResponse(res);
            setError(null);
        }).catch(e => {
            setResponse(null);
            setError(e)
        });
    }, [])

    return (
        <main className={styles.container}>
            <Button className="log-out-button" onClick={logOut}>Log out</Button>
            <div className="table-title-container">
                <p>Recordings</p>
                <div className="table-link">
                <a href="/users-dashboard">Users</a>
                </div>
            </div>
            <div className={styles.wrapper}>
                <Table data={recordings} rowsPerPage={10}/>
            </div>
        </main>
    );
};
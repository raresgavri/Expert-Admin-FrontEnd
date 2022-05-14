import React, {useState} from "react";
import styles from './styles.css';
import {AddButton} from "../../layout/recordings-dashboard/components/Buttons/addButton";
import Table from "../../layout/recordings-dashboard/components/Table";
import recordingsData from '../../layout/recordings-dashboard/data/recordings'

export const RecordingsDashboardPage = () => {
    const [recordings] = useState([...recordingsData]);
    return (
        <main className={styles.container}>
            <p>Recordings</p>
            <div className={styles.wrapper}>
                <AddButton label={'ADD'} onClick={() => console.log()}/>
                <Table data={recordings} rowsPerPage={10} />
            </div>
        </main>
    );
};
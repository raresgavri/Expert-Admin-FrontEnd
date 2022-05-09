import React, { useState } from "react";

import recordingsData from "./data/recordings";
import styles from "./App.module.css";
import Table from "./components/Table";
import {AddButton} from "./components/Buttons/addButton";

const App = () => {
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

export default App;
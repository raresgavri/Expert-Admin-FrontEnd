import React, { useState } from "react";

import useTable from "../../hooks/useTable";
import styles from "./styles.module.css";
import TableFooter from "./TableFooter";
import { PlayButton } from "../Buttons/playButton";
import { EditButton } from "../Buttons/editButton";
import { DeleteButton } from "../Buttons/deleteButton";

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>ID</th>
            <th className={styles.tableHeader}>File</th>
            <th className={styles.tableHeader}>Created at</th>
            <th className={styles.tableHeader}>Result</th>
            <th className={styles.tableHeader}>Type</th>
            <th className={styles.tableHeader}></th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className={styles.tableRowItems} key={el.id}>
              <td className={styles.tableCell}>{el.name}</td>
              <td className={styles.tableCell}>{el.email}</td>
              <td className={styles.tableCell}>{el.date}</td>
              <td className={styles.tableCell}>{el.doctor}</td>
              <td className={styles.tableCell}>{el.condition}</td>
              <PlayButton label={"▶️"} onClick={() => console.log()} />
              <EditButton label={"🖍️"} onClick={() => console.log()} />
              <DeleteButton label={"🗑️"} onClick={() => console.log()} />
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;

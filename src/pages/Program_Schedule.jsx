import React from "react";
import styles from "../styles/ProgramSchedule.module.css"; // Import the CSS file

const Program_Schedule = () => {
  // Data for the tables

  return (
    <div>
      <table className={styles.table}>
        <tr className={styles.tr}>
          <th className={styles.th}>Event</th>
          <th className={styles.th}>Time</th>
          <th className={styles.th}>Speaker</th>
          <th className={styles.th}>Title of Talk</th>
        </tr>
        <tr  className={styles.tr}>
          <th colSpan={4} className={styles.th}>Day 1 Nov 15,2024</th>
        </tr>
        <tr  className={styles.tr}>
          <td className={styles.td}>Inauguration</td>
          <td className={styles.td}>2:00 - 2:45 PM</td>
        </tr>
        <tr  className={styles.tr}>
          <td className={styles.td}>High Time</td>
          <td className={styles.td}>2:45 - 3:30 PM</td>
        </tr>
        {/* //season1 */}
        <tr  className={styles.tr}>
          <th colSpan={4}>
            Season1 Nov 15,2024 <br />
            "Biomarker Discovery and OMICS Technology in Disease Diagnosis"
          </th>
        </tr>

        <tr  className={styles.tr}>
          <td className={styles.td}>Key Note Address</td>
          <td className={styles.td}>2:00 - 2:45 PM</td>
        </tr>
        <tr  className={styles.tr}>
          <td className={styles.td}>Pienary Lecture</td>
          <td className={styles.td}>2:45 - 3:30 PM</td>
        </tr>
        <tr  className={styles.tr}>
          <td className={styles.td}>Tea</td>
          <td className={styles.td}>2:00 - 2:45 PM</td>
        </tr>
        <tr  className={styles.tr}>
          <td className={styles.td}>IL-1</td>
          <td className={styles.td}>2:45 - 3:30 PM</td>
        </tr>

        <tr  className={styles.tr}>
          <td className={styles.td}>OP-1</td>
          <td className={styles.td}>2:00 - 2:45 PM</td>
        </tr>
        <tr  className={styles.tr}>
          <td className={styles.td}>OP-2</td>
          <td className={styles.td}>2:45 - 3:30 PM</td>
        </tr>

        <tr  className={styles.tr}>
          <td className={styles.td}>OP-3</td>
          <td className={styles.td}>2:00 - 2:45 PM</td>
        </tr>
        <tr  className={styles.tr}>
          <td className={styles.td}>
            <b>Dinner</b>
          </td>
          <td className={styles.td}>2:45 - 3:30 PM</td>
        </tr>
      </table>
    </div>
  );
};

export default Program_Schedule;

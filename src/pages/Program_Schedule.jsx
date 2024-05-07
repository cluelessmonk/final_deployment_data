import React from "react";
import "../styles/ProgramSchedule.css"; // Import the CSS file

const Program_Schedule = () => {
  // Data for the tables

  return (
    <div>
      <table>
        <tr>
          <th>Event</th>
          <th>Time</th>
          <th>Speaker</th>
          <th>Title of Talk</th>
        </tr>
        <tr>
          <th colSpan={4}>Day 1 Nov 15,2024</th>
        </tr>
        <tr>
          <td>Inauguration</td>
          <td>2:00 - 2:45 PM</td>
        </tr>
        <tr>
          <td>High Time</td>
          <td>2:45 - 3:30 PM</td>
        </tr>
        {/* //season1 */}
        <tr>
          <th colSpan={4}>
            Season1 Nov 15,2024 <br />
            "Biomarker Discovery and OMICS Technology in Disease Diagnosis"
          </th>
        </tr>

        <tr>
          <td>Key Note Address</td>
          <td>2:00 - 2:45 PM</td>
        </tr>
        <tr>
          <td>Pienary Lecture</td>
          <td>2:45 - 3:30 PM</td>
        </tr>
        <tr>
          <td>Tea</td>
          <td>2:00 - 2:45 PM</td>
        </tr>
        <tr>
          <td>IL-1</td>
          <td>2:45 - 3:30 PM</td>
        </tr>

        <tr>
          <td>OP-1</td>
          <td>2:00 - 2:45 PM</td>
        </tr>
        <tr>
          <td>OP-2</td>
          <td>2:45 - 3:30 PM</td>
        </tr>

        <tr>
          <td>OP-3</td>
          <td>2:00 - 2:45 PM</td>
        </tr>
        <tr>
          <td>
            <b>Dinner</b>
          </td>
          <td>2:45 - 3:30 PM</td>
        </tr>
      </table>
    </div>
  );
};

export default Program_Schedule;

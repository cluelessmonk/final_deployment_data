import React from "react";

const Program_Schedule = () => {
  return (
    <div className="container mx-auto px-4 py-8 overflow-x-auto text-base">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200 text-left border">Event</th>
            <th className="px-4 py-2 bg-gray-200 text-left border">Time</th>
            <th className="px-4 py-2 bg-gray-200 text-left border">Speaker</th>
            <th className="px-4 py-2 bg-gray-200 text-left border">Title of Talk</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <th colSpan={4} className="px-4 py-2 border text-left">Day 1 Nov 15, 2024</th>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Inauguration</td>
            <td className="px-4 py-2 border">2:00 - 2:45 PM</td>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border"></td>
          </tr>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 border">High Time</td>
            <td className="px-4 py-2 border">2:45 - 3:30 PM</td>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border"></td>
          </tr>
          <tr>
            <th colSpan={4} className="px-4 py-2 border text-left">
              Season 1 Nov 15, 2024 <br />
              "Biomarker Discovery and OMICS Technology in Disease Diagnosis"
            </th>
          </tr>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 border">Key Note Address</td>
            <td className="px-4 py-2 border">2:00 - 2:45 PM</td>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border"></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Plenary Lecture</td>
            <td className="px-4 py-2 border">2:45 - 3:30 PM</td>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border"></td>
          </tr>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 border">Tea</td>
            <td className="px-4 py-2 border">3:30 - 4:00 PM</td>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border"></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">IL-1</td>
            <td className="px-4 py-2 border">4:00 - 4:45 PM</td>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border"></td>
          </tr>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 border">OP-1</td>
            <td className="px-4 py-2 border">4:45 - 5:30 PM</td>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border"></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">OP-2</td>
            <td className="px-4 py-2 border">5:30 - 6:15 PM</td>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border"></td>
          </tr>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 border">OP-3</td>
            <td className="px-4 py-2 border">6:15 - 7:00 PM</td>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border"></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border font-bold">Dinner</td>
            <td className="px-4 py-2 border">7:00 - 8:00 PM</td>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Program_Schedule;

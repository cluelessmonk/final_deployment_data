import React from "react";

const Programme = () => {
  const sessions = [
    "Biomarker Discovery and OMICS Technology in Disease Diagnosis",
    "Advancements in Cancer Diagnostics and Liquid Biopsy",
    "Nanotechnology in Disease Diagnostics",
    "Point of Care Diagnostics, Miniaturization and Automation",
    "Point of care diagnostics",
    "Young Scientist Award presentations",
    "AI & ML in Diagnostics, Precision Medicine and Digital Health",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-100 to-yellow-300 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Programme
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          This conference will witness seven vibrant sessions:
        </p>
        <ul className="space-y-4">
          {sessions.map((session, index) => (
            <li
              key={index}
              className="bg-yellow-200 hover:bg-yellow-300 transition-colors duration-300 p-4 rounded-lg shadow-md"
            >
              <span className="font-semibold text-gray-800">Session {index + 1}:</span> {session}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Programme;

import React from "react";
import biotechImage from "../images/biotech.jpeg"; // Adjust the import path according to your project structure

const AboutDepartment = () => {
  return (
    <div className="px-6 py-10 max-w-3xl mx-auto font-sans">
      {/* Department Image */}
      <div className="relative flex justify-center mb-6">
        <img
          src={biotechImage}
          alt="Biotech Department"
          className="w-full h-auto border-4 border-gray-300 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:brightness-75"
        />
        <span className="absolute bottom-2 left-2 text-white text-lg font-bold">
          MNNIT Allahabad
        </span>
      </div>

      {/* About Biotechnology Department */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        About Biotechnology Department
      </h1>
      <p className="text-lg leading-relaxed text-gray-700 text-justify mb-4">
        The Department of Biotechnology at MNNIT Allahabad was established as a
        new academic unit under the Applied Mechanics Department in 2006 and
        gained shape as an independent administrative ‘Department of
        Biotechnology’ in April 2012. The Department comprises expert faculty
        members from diverse areas, state-of-the-art modular laboratories to
        perform experiments, and hosts extramural research projects from various
        government agencies such as DST, DBT, UGC, MNRE, ICMR, etc. The
        department runs B.Tech, M.Tech, and Ph.D. programs in Biotechnology.
      </p>
    </div>
  );
};

export default AboutDepartment;

import React from "react";
import mnnitImage from "../images/mnnit.jpeg"; // Adjust the import path according to your project structure
import anandBhawanImage from "../images/anandbhawan.jpg"; // Adjust the import path according to your project structure
import sangamImage from "../images/sangam.jpg"; // Adjust the import path according to your project structure

const AboutInstitute = () => {
  return (
    <div className="px-6 py-10 max-w-3xl mx-auto font-sans">
      {/* MNNIT Image */}
      <div className="relative flex justify-center mb-6">
        <img
          src={mnnitImage}
          alt="MNNIT Campus"
          className="w-full h-auto border-4 border-gray-300 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:brightness-75"
        />
        <span className="absolute bottom-2 left-2 text-white text-lg font-bold">
          MNNIT Academic Building
        </span>
      </div>

      {/* About and History of MNNIT */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        About MNNIT
      </h1>
      <p className="text-lg leading-relaxed text-gray-700 text-justify mb-4">
        Motilal Nehru National Institute of Technology (MNNIT) Allahabad is an
        institute with total commitment to quality and excellence in academic
        pursuits. The institute has been granted the status of Institution of
        National Importance in August 2007. It was established as Motilal Nehru
        Regional Engineering College (MNREC) in the year 1961 as a joint
        enterprise of the Government of India and the Government of Uttar
        Pradesh. MNREC was transformed into National Institute of Technology,
        fully funded by the Ministry of Human Resource Development, Govt. of
        India, in June 2002. The institute offers B.Tech, M.Tech, Ph.D., M.C.A,
        M.B.A., and (Mathematics and Scientific Computing) degrees in various
        disciplines of sciences, engineering, technology, and humanities. Over
        the years, MNNIT has made significant contributions to the field of
        engineering and technology, and its alumni have achieved notable success
        in various industries and academia.
      </p>

      {/* Separator */}
      <div className="flex justify-center items-center my-8">
        <span className="text-blue-500">* * * * *</span>
        <div className="border-t-4 border-blue-500 w-2/3 mx-4"></div>
        <span className="text-blue-500">* * * * *</span>
      </div>

      {/* Anand Bhawan Image */}
      <div className="relative flex justify-center mb-6">
        <img
          src={anandBhawanImage}
          alt="Anand Bhawan"
          className="w-full h-auto border-4 border-gray-300 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:brightness-75"
        />
        <span className="absolute bottom-2 left-2 text-white text-lg font-bold">
          Anand Bhawan House In Prayagraj
        </span>
      </div>

      {/* About Prayagraj */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">About Prayagraj</h2>
      <p className="text-lg leading-relaxed text-gray-700 text-justify mb-4">
        Prayagraj, historically known as Allahabad, is a vibrant city with a
        rich cultural and historical heritage. It is situated at the confluence
        of the Ganges, Yamuna, and Sarasvati rivers, making it one of the
        holiest cities in India. Prayagraj is famous for the Kumbh Mela, the
        largest religious gathering in the world, which attracts millions of
        pilgrims from across the globe. The city is also known for its
        historical landmarks, educational institutions, and vibrant cultural
        scene.
      </p>

      {/* Separator */}
      <div className="flex justify-center items-center my-8">
        <span className="text-blue-500">* * * * *</span>
        <div className="border-t-4 border-blue-500 w-2/3 mx-4"></div>
        <span className="text-blue-500">* * * * *</span>
      </div>

      {/* Sangam Image */}
      <div className="relative flex justify-center mb-6">
        <img
          src={sangamImage}
          alt="Sangam"
          className="w-full h-auto border-4 border-gray-300 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:brightness-75"
        />
        <span className="absolute bottom-2 left-2 text-white text-lg font-bold">
          Sangam in Prayagraj
        </span>
      </div>

      {/* About Sangam */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Sangam City</h2>
      <p className="text-lg leading-relaxed text-gray-700 text-justify">
        Prayagraj is often referred to as Sangam City due to the sacred
        confluence (Sangam) of the three rivers. This confluence is a major
        pilgrimage site and a symbol of the city's spiritual significance. The
        city seamlessly blends its ancient traditions with modern developments,
        making it an ideal place for educational institutions like MNNIT to
        thrive. Prayagraj's unique blend of history, culture, and progress
        provides a stimulating environment for learning and growth.
      </p>
    </div>
  );
};

export default AboutInstitute;

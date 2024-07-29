import React from "react";
import Carousel from "../components/DataPage/Datapage"; // Adjust the import path according to your project structure
import img1 from "../images/home1.jpeg";
import img2 from "../images/home2.jpeg";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col font-body">
      {/* Home Section */}
      <section className="bg-yellow-100 text-gray-800 text-center py-20">
        <h2 className="text-4xl font-bold mt-4 font-heading">ADT-2024</h2>
        <p className="text-3xl font-bold mt-4 font-subheading">
          An International Conference on Advancements in Diagnostic
          Technologies: Global Healthcare Monitoring
        </p>
        <p className="text-xl mt-4">
          Organized by: Department of Biotechnology, Motilal Nehru National
          Institute of Technology (MNNIT) Allahabad, Prayagraj 211004 India
        </p>
        <p className="text-xl mt-4">15-17 November 2024</p>
        <div className="flex flex-col items-center mt-8">
          <img
            src={img1}
            alt="Image 1"
            className="w-1/2 h-auto mb-10 border-gray-300 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:brightness-75"
          />

          <img
            src={img2}
            alt="Image 2"
            className="w-1/2 h-auto  border-gray-300 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:brightness-75"
          />
        </div>
        <div>Source: Google Stack Images</div>
      </section>
      <div className="flex justify-center items-center my-8">
        <span className="text-blue-500">* * * * *</span>
        <div className="border-t-4 border-blue-500 w-2/3 mx-4"></div>
        <span className="text-blue-500">* * * * *</span>
      </div>

      {/* Invitation Section */}
      <section
        id="invitation"
        className="py-20 px-4 bg-yellow-100 text-gray-800"
      >
        <div className="max-w-4xl mx-auto relative p-8 border-l-2 border-r-2 border-gray-400 text-center">
          <h2 className="text-3xl font-bold text-center font-heading">
            INVITATION
          </h2>
          <p className="mt-6 font-invitation text-2xl">
            Dear Friends and Colleagues,
          </p>
          <p className="mt-4 font-invitation text-2xl">
            We are delighted to invite you to attend ADT-2024: An International
            Conference on Advancements in Diagnostic Technologies: Global
            Healthcare Monitoring, scheduled to be held from November 15-17,
            2024. This prestigious event will be organized by the Department of
            Biotechnology at Motilal Nehru National Institute of Technology
            (MNNIT) Allahabad, Prayagraj, India.
          </p>
          <p className="mt-4 font-invitation text-2xl">
            ADT-2024 aims to bring together leading academic scientists,
            researchers, and scholars to exchange and share their experiences
            and research results on all aspects of Diagnostic Technologies and
            Healthcare Monitoring. It also provides a premier interdisciplinary
            platform for researchers, practitioners, and educators to present
            and discuss the most recent innovations, trends, and concerns, as
            well as practical challenges encountered and solutions adopted in
            the fields of Diagnostic Technologies and Global Healthcare
            Monitoring.
          </p>
          <p className="mt-4 font-invitation text-2xl">
            We would be honored to have you participate in this event, where you
            will have the opportunity to network with peers, gain insights from
            esteemed keynote speakers, and contribute to discussions that shape
            the future of diagnostic technologies.
          </p>
          <p className="mt-4 font-invitation text-2xl">
            Please confirm your participation before the deadline to ensure your
            place at the conference. For more details about the conference,
            including registration, accommodation, and the program schedule,
            please visit our website.
          </p>
          <p className="mt-4 font-invitation text-2xl">
            We look forward to your participation in ADT-2024 and to a fruitful
            and engaging conference.
          </p>
          <p className="mt-4 font-invitation text-2xl">Sincerely,</p>
          <p className="mt-4 font-invitation text-2xl">Organizing Secretary,</p>
          <p className="mt-4 font-invitation text-2xl">
            Department of Biotechnology, Motilal Nehru National Institute of
            Technology (MNNIT) Allahabad Prayagraj - 211004, India
          </p>
        </div>
      </section>

      <div className="flex justify-center items-center my-8">
        <span className="text-blue-500">* * * * *</span>
        <div className="border-t-4 border-blue-500 w-2/3 mx-4"></div>
        <span className="text-blue-500">* * * * *</span>
      </div>

      {/* Speakers Section */}
      <section id="speakers" className="py-20 px-4 bg-yellow-100 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center font-heading">
            SPEAKERS
          </h2>
          <p className="mt-6 text-center font-body">
            We are grateful to all speakers for their support.
          </p>
          <div className="mt-8">
            <Carousel />
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center my-8">
        <span className="text-blue-500">* * * * *</span>
        <div className="border-t-4 border-blue-500 w-2/3 mx-4"></div>
        <span className="text-blue-500">* * * * *</span>
      </div>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 px-4 bg-yellow-100 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center font-heading">
            SPONSORS
          </h2>
          <p className="mt-6 text-center font-body">
            We are grateful to all sponsors for their support.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

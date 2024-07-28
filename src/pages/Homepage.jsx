import React from "react";
import Carousel from "../components/DataPage/Datapage"; // Adjust the import path according to your project structure
import img1 from "../images/biotechhome1.jpg";
import img2 from "../images/biotechhome2.webp";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col font-body">
      {/* Home Section */}
      <section
        id="home"
        className="bg-yellow-100 text-gray-800 text-center py-20"
      >
        <h1 className="text-4xl font-bold font-heading">HOME</h1>
        <h2 className="text-4xl font-bold mt-4 font-heading">ADT-2024</h2>
        <p className="text-3xl font-bold mt-4 font-subheading">
          An International Conference on Advancements in Diagnostic
          Technologies: Global Healthcare Monitoring
        </p>
        <p className="text-xl mt-4">
          Organized by: Department of Biotechnology, Motilal Nehru National
          Institute of Technology (MNNIT) Allahabad, Prayagraj 211004 India
        </p>
        <p className="text-xl mt-4">
          5-7 September 2024, MNNIT Allahabad, Prayagraj, India
        </p>
        <div className="flex flex-col items-center mt-8">
          <img src={img1} alt="Image 1" className="w-1/2 h-auto mb-4" />
          <img src={img2} alt="Image 2" className="w-1/2 h-auto" />
        </div>
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
        <div className="max-w-4xl mx-auto relative p-8 border-l-2 border-r-2 border-gray-400">
          <h2 className="text-3xl font-bold text-center font-heading">
            INVITATION
          </h2>
          <p className="mt-6 font-invitation text-2xl">
            Dear Friends and Colleagues,
          </p>
          <p className="mt-4 font-invitation text-2xl">
            On behalf of the Organizing Committee, we cordially invite you to
            join us for the ADT-2024: An International Conference on
            Advancements in Diagnostic Technologies: Global Healthcare
            Monitoring, to be held between 5-7 September 2024, at MNNIT
            Allahabad, Prayagraj, India. MNNIT Allahabad, located in the city of
            Prayagraj, is one of India's premier engineering institutions, known
            for its commitment to excellence in academic and research pursuits.
          </p>
          <p className="mt-4 font-invitation text-2xl">
            The main theme of this conference is to highlight the latest
            advancements in diagnostic technologies and their impact on global
            healthcare monitoring. The conference will cover a broad range of
            topics including nanotechnology, omics technology, cancer
            diagnostics, liquid biopsy-based assays, point of care diagnostics,
            miniaturization and automation of diagnostic methods, precision
            medicine, digital health, and the impact of AI and ML in
            diagnostics.
          </p>
          <p className="mt-4 font-invitation text-2xl">
            We aim to bring together leading scientists, researchers, and
            industry experts from around the world to discuss innovative ideas
            and developments in the field of diagnostic technologies. The
            conference will feature plenary sessions, keynote speeches,
            contributed talks, and poster presentations, providing ample
            opportunities for networking and collaboration.
          </p>
          <p className="mt-4 font-invitation text-2xl">
            Prayagraj, historically known as Allahabad, is a vibrant city with a
            rich cultural and historical heritage. It is situated at the
            confluence of the Ganges, Yamuna, and Sarasvati rivers, and is known
            for the Kumbh Mela, the largest religious gathering in the world.
            The city offers a unique blend of ancient traditions and modern
            developments, making it an ideal location for this prestigious
            conference.
          </p>
          <p className="mt-4 font-invitation text-2xl">
            We look forward to your participation in ADT-2024 and to welcoming
            you to MNNIT Allahabad and the beautiful city of Prayagraj. Stay
            tuned for more updates on the conference program and other details.
            To keep up-to-date with the conference, please bookmark the website:
            www.biosensor2024.com
          </p>
          <p className="mt-4 font-invitation text-2xl">Yours Sincerely,</p>
          <p className="mt-4 font-invitation text-2xl">
            Organizing Committee ADT-2024
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

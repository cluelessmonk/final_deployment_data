import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../components/DataPage/Datapage"; // Adjust the import path according to your project structure
import img1 from "../images/home1.jpeg";
import img2 from "../images/home2.jpeg";
import sponsor1 from "../images/sponsor1.jpeg"; // Department of Biotechnology India
import sponsor2 from "../images/sponsor2.jpeg"; // Department of Science and Technology India
import sponsor3 from "../images/sponsor3.jpeg"; // Council of Science and Technology UP
import ChiefGuestSection from "../components/Chiefguest";
const sponsors = [
  { img: sponsor1, name: "Department of Biotechnology India" },
  { img: sponsor2, name: "Department of Science and Technology India" },
  { img: sponsor3, name: "Council of Science and Technology UP" },
];

const sponsorSettings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  pauseOnHover: true,
};

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col font-body">
      {/* Home Section */}

      {/* Flash Message */}
<div className="bg-red-500 text-white py-4 text-center font-bold text-3xl animate-pulse">
        The Abstract Submission deadline has now been extended to  <strong>30th October 2024</strong>
      </div>
      <div className="bg-blue-500 text-white py-4 text-center text-xl">
  <marquee behavior="scroll" direction="left" scrollamount="10">
  In case acceptance of abstract is required from the organizers for getting approval from the participant's institute before registration fee submission, the participants can send  the abstract at adt2024@mnnit.ac.in
  </marquee>
</div>
<div className="bg-red-500 text-white py-4 text-center text-xl mt-3px">
  <marquee behavior="scroll" direction="left" scrollamount="10">
  For On Spot registrations,  the abstracts may be submitted to adt2024@mnnit.ac.in by 7th November along with accomodation request, if any
  </marquee>
</div>
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
            className="w-1/2 h-auto border-gray-300 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:brightness-75"
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
          <p className="mt-6 font-invitation text-2xl text-justify">
            Dear Friends and Colleagues,
          </p>
          <p className="mt-4 font-invitation text-2xl text-justify">
            We are delighted to invite you to attend ADT-2024: An International
            Conference on Advancements in Diagnostic Technologies: Global
            Healthcare Monitoring, scheduled to be held from November 15-17,
            2024. This prestigious event will be organized by the Department of
            Biotechnology at Motilal Nehru National Institute of Technology
            (MNNIT) Allahabad, Prayagraj, India.
          </p>
          <p className="mt-4 font-invitation text-2xl text-justify">
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
          <p className="mt-4 font-invitation text-2xl text-justify">
            We would be honored to have you participate in this event, where you
            will have the opportunity to network with peers, gain insights from
            esteemed keynote speakers, and contribute to discussions that shape
            the future of diagnostic technologies.
          </p>
          <p className="mt-4 font-invitation text-2xl text-justify">
            Please confirm your participation before the deadline to ensure your
            place at the conference. For more details about the conference,
            including registration, accommodation, and the program schedule,
            please visit our website.
          </p>
          <p className="mt-4 font-invitation text-2xl text-justify">
            We look forward to your participation in ADT-2024 and to a fruitful
            and engaging conference.
          </p>
          <p className="mt-4 font-invitation text-2xl text-justify">
            Sincerely,
          </p>
          <p className="mt-4 font-invitation text-2xl text-justify">
            Organizing Secretary,
          </p>
          <p className="mt-4 font-invitation text-2xl text-justify">
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


      {/* Chief guest section*/ }
      <ChiefGuestSection/>

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
          <div className="mt-8">
            <Slider {...sponsorSettings}>
              {sponsors.map((sponsor, index) => (
                <div key={index} className="p-2">
                  <div className="bg-light-yellow bg-opacity-50 rounded-lg shadow-lg flex flex-col items-center justify-center p-6 transform transition-transform duration-300 hover:scale-105 hover:brightness-125 w-full h-96">
                    <img
                      src={sponsor.img}
                      alt={sponsor.name}
                      className="w-full h-full object-contain mb-4"
                    />
                    <h2 className="text-2xl font-semibold text-center">
                      {sponsor.name}
                    </h2>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

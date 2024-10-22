import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../components/Card";
import director from "../images/director.jpeg";
import girijesh from "../images/girijesh_patel.jpg";
import joybrata from "../images/joybratamal.jpg";
import manisha from "../images/manisha_sachan.jpg";
import nirmal from "../images/nirmal.jpg";
import rajitha from "../images/rajitha.jpg";
import seema from "../images/seema_nara.jpg";
import sangeeta from "../images/sangeetanegi.jpg";

const Committee = () => {
  const organizingCommittee = [
    {
      role: "Patron",
      name: "Prof. R S Verma",
      department: "Director",
      college: "MNNIT Allahabad",
      email: "rama.verma@mnnit.ac.in",
      experience: "25 years in Biotechnology",
      image: director,
    },
  ];

  const organizingSecretaries = [
    {
      name: "Dr. Manisha Sachan",
      department: "Department of Biotechnology",
      college: "MNNIT Allahabad",
      role: "Chairperson,Head and Organizing Secretary  ",
      image: manisha,
    },
    {
      name: "Dr. Seema Nara",
      department: "Department of Biotechnology",
      college: "MNNIT Allahabad",
      role: "Organizing Secretary",
      image: seema,
    },
    {
      role: "Treasurer",
      name: "Dr. Joybrata Mal",
      department: "Department of Biotechnology",
      college: "MNNIT Allahabad",
      email: "joybrata.mal@mnnit.ac.in",
      experience: "18 years in Biotechnology",
      image: joybrata,
    },
  ];

  const organizingCoordinators = [
    {
      name: "Dr. Rajitha B.",
      department: "Department of Computer Science and Engineering",
      college: "MNNIT Allahabad",
      role: "Organizing Coordinator",
      image: rajitha,
    },

    {
      name: "Dr. Girijesh Patel",
      department: "Department of Biotechnology",
      college: "MNNIT Allahabad",
      role: "Organizing Coordinator",
      image: girijesh,
    },
    {
      name: "Dr. Nirmal Ch. Roy",
      department: "Department of Electronics and Communication Engineering",
      college: "MNNIT Allahabad",
      role: "Organizing Coordinator",
      image: nirmal,
    },
  ];

  const advisoryCommittee = [
    {
      name: "Prof. K. Thangraj",
      title: "Director",
      organization: "CDFD Hyderabad, India",
    },
    {
      name: "Prof. Harpal Singh",
      title: "Scientist Emeritus",
      organization: "IIT Delhi, India",
    },
    {
      name: "Dr. Sandeep Vashist",
      title: "Senior Global IVD Product Director",
      organization: "Fapon-Biotech Inc. Germany",
    },
    {
      name: "Prof. Sudha Sharma",
      title: "Harvard University",
      organization: "USA",
    },
    {
      name: "Dr. Arindam Chakraborty",
      title: "Deputy General Manager",
      organization: "Enzene-Biosciences, Pune, India",
    },
    {
      name: "Dr. Ajay P. Singh",
      title: "",
      organization: "USA-MCI , AL ,USA",
    },
    {
      name: "Prof. Siddhartha S Ghosh",
      title: "",
      organization: "IIT Guwahati , India",
    },
    {
      name: "Prof. Mukesh Kumar Pathak ",
      title: "",
      organization: "IIT Roorkee , India",
    },
    {
      name: "Prof. Cathal Gurrin",
      title: "",
      organization: "Dublin City University , Ireland",
    },
    {
      name: "Prof. P. Hemachandra Reddy",
      title: "",
      organization: "TTUHSC ,TX ,USA",
    },
  ];

  const combinedMembers = [...organizingSecretaries, ...organizingCoordinators];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2400,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <div className="container mx-auto px-4 py-8 text-base">
      <header className="text-center mb-8">
        <h1 className="text-3xl underline text-gray-800 font-bold">
          Organizing Committee
        </h1>
      </header>
      <main className="space-y-8">
        {/* Pyramid Structure for the first table */}
        <div className="flex flex-col items-center bg-yellow-100 bg-opacity-50 shadow-md rounded-lg overflow-hidden py-8 space-y-8">
          <div className="flex justify-center space-x-8">
            <Card
              member={organizingCommittee[0]}
              customStyles="w-72 h-96"
              initialColor="#DEAC80" // Light yellow translucent
            />
          </div>
          <div className="flex justify-center space-x-8">
            {organizingCommittee.slice(1).map((member, index) => (
              <Card
                key={index}
                member={member}
                customStyles="w-72 h-96"
                initialColor="#DEAC80" // Very light blue translucent
              />
            ))}
          </div>
        </div>

        {/* Separator line */}
        <div className="flex justify-center items-center my-8">
          <span className="text-gray-500">* * *</span>
          <div className="border-t-2 border-gray-300 w-2/3 mx-4"></div>
          <span className="text-gray-500">* * *</span>
        </div>

        {/* Combined Carousel for the remaining members */}
        <div
          className="bg-yellow-100 bg-opacity-50 shadow-md rounded-lg overflow-hidden mx-auto"
          style={{ width: "90%" }}
        >
          <div className="overflow-hidden">
            <Slider {...carouselSettings}>
              {combinedMembers.map((member, index) => (
                <div key={index} className="p-2">
                  {" "}
                  {/* Reduced padding for less gap */}
                  <div className="bg-light-yellow bg-opacity-50 rounded-lg shadow-lg flex flex-col items-center justify-center p-6 transform transition-transform duration-300  hover:brightness-125 hover:scale-105 w-72 h-96">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-36 h-36 rounded-full object-cover mb-4"
                    />
                    <h2 className="text-2xl font-semibold text-center">
                      {member.name}
                    </h2>
                    <p className="text-gray-600 text-lg text-center">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-lg text-center">
                      {member.department}
                    </p>
                    <p className="text-gray-600 text-lg text-center">
                      {member.college}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Separator line */}
        <div className="flex justify-center items-center my-8">
          <span className="text-gray-500">* * *</span>
          <div className="border-t-2 border-gray-300 w-2/3 mx-4"></div>
          <span className="text-gray-500">* * *</span>
        </div>

        {/* Advisory Committee Carousel */}
        <div className="text-center mb-8">
          <h2 className="text-3xl underline text-gray-800 font-bold">
            Advisory Committee
          </h2>
        </div>
        <div
          className="bg-yellow-100 bg-opacity-50 shadow-md rounded-lg overflow-hidden mx-auto"
          style={{ width: "90%" }}
        >
          <div className="overflow-hidden">
            <Slider {...carouselSettings}>
              {advisoryCommittee.map((member, index) => (
                <div key={index} className="p-2">
                  {" "}
                  {/* Reduced padding for less gap */}
                  <div className="bg-light-yellow bg-opacity-50 rounded-lg shadow-lg flex flex-col items-center justify-center p-6 transform transition-transform duration-300  hover:brightness-125 hover:scale-105 w-72 h-72">
                    <h2 className="text-2xl font-semibold text-center">
                      {member.name}
                    </h2>
                    <p className="text-gray-600 text-lg text-center">
                      {member.title}
                    </p>
                    <p className="text-gray-600 text-lg text-center">
                      {member.organization}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Committee;

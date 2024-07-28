import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p1 from "../../images/Picture1.jpg";
import p2 from "../../images/Picture2.jpg";
import p3 from "../../images/Picture3.jpg";
import p4 from "../../images/Picture4.jpg";
import p5 from "../../images/Picture5.jpg";
import p6 from "../../images/Picture6.jpg";

const speakers = [
  {
    img: p1,
    name: "Prof. Satish Raghvan",
    title: "Dept. of Biochemistry",
    institution: "IISc Bangalore",
  },
  {
    img: p2,
    name: "Prof. Bushra Ateeq",
    title: "BSBE",
    institution: "IIT Kanpur",
  },
  {
    img: p3,
    name: "Prof. Cathal Gurrin",
    title: "School of Computing",
    institution: "Dublin City University, Ireland",
  },
  {
    img: p4,
    name: "Prof. Uday C Ghoshal",
    title: "Senior Consultant",
    institution: "Gastroenterology Apollo Multispeciality Hospitals, Kolkata",
  },
  {
    img: p5,
    name: "Dr. Evgeny G. Izumchenko",
    institution: "University of Chicago",
  },
  {
    img: p6,
    name: "Dr. Arindam Chakraborty",
    institution: "Enzene Biosciences, Pune",
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 290,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    pauseOnHover: true,
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-yellow-100 py-10 ">
      <div className="w-full max-w-6xl">
        <Slider {...settings}>
          {speakers.map((speaker, index) => (
            <div key={index} className="p-6">
              <div className="bg-sky-100 rounded-lg shadow-lg flex flex-col items-center justify-center p-8  h-96 w-72 transform transition-transform duration-300 hover:scale-105 hover:brightness-125">
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  className="w-36 h-36 rounded-full object-cover mb-4"
                />
                <h2 className="text-2xl font-semibold text-center">
                  {speaker.name}
                </h2>
                {speaker.title && (
                  <p className="text-gray-600 text-lg text-center">
                    {speaker.title}
                  </p>
                )}
                <p className="text-gray-600 text-lg text-center">
                  {speaker.institution}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;

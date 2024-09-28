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
import astha from "../../images/aasthamishra.jpg";
import anandk from "../../images/anandkumar.png";
import ashok from "../../images/ashokkumar.jpg";
import gopinath from "../../images/gopinath.jpg";
import gorachand from "../../images/gorachanddatta.png";
import kanhaia from "../../images/kanhaiasingh.jpg";
import mohdkush from "../../images/mohdkushman.png";
import pranjal from "../../images/pranjalchandra.jpg";
import prasoon from "../../images/prasoonkumar.jpg";
import satheesh from "../../images/satheeshbabu.jpg";
import sidgosh from "../../images/sidsgosh.jpg";
import tarun from "../../images/tarunsharma.jpg";
import zineb from "../../images/zineb.png";
import saurabh from "../../images/saurabh.jpg";
import sandeep from "../../images/sandeep.jpeg";
import devashish from "../../images/Devashish_Rath.jpg";
import monica from '../../images/monicasachdeva.jpg';
import aj from "../../images/Aj.jpg";
import chandra from "../../images/chandrashekhar.jpg";
import santosh from "../../images/santoshkmishra.jpg";


const speakers = [
  {
    img: p1,
    name: "Prof. Sathees C Raghavan",
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
  {
    img: sidgosh,
    name: "Prof. Siddharth S Gosh",
    institution: "IIT Guwahati",
  },
  {
    img: satheesh,
    name: "Prof. Sateesh Babu",
    institution: "Amrita University, Coimbatore",
  },
  {
    img: ashok,
    name: "Prof. Ashok Sharma",
    institution: "AIIMS Delhi",
  },
  {
    img: mohdkush,
    name: "Dr. Mohd. Khushman",
    institution: "Washington University, St. Louis, USA",
  },
  {
    img: kanhaia,
    name: "Dr. Kanhiya Singh",
    institution: "PITsburg University",
  },
  {
    img: pranjal,
    name: "Dr. Pranjal Chandra",
    institution: "IIT BHU",
  },
  {
    img: aj,
    name: "Dr. Amit Jaiswal ",
    institution: "IIT Mandi",
  },
  {
    img: chandra,
    name: "Prof. Kanduri Chandreshekhar",
    institution: "University of Gothenburg, Sweden",
  },
  {
    img: monica,
    name: " Dr. Monika Sachdeva",
    institution: "CDRI Lucknow, India",
  },
  {
    img: santosh,
    name: " Dr. Santosh Kumar Mishra",
    institution: "IIT Kanpur",
  },
  {
    img: gorachand,
    name: "Dr. Gorachand Dutta",
    institution: "IIT KGP",
  },
  {
    img: tarun,
    name: "Dr. Tarun Kumar Sharma",
    institution: "Ahmedabad",
  },
  {
    img: saurabh,
    name: "Dr. Saurabh Kumar",
    institution: "NIPER Guwahati",
  },
  {
    img: zineb,
    name: "Dr. Zineb Qmichou",
    institution: "MAScIR Morocco",
  },
  {
    img: astha,
    name: "Dr. Aastha Mishra",
    institution: "IGIB, New Delhi",
  },
  {
    img: prasoon,
    name: "Dr. Prasoon Kumar",
    institution: "NIT Rourkela",
  },
  {
    img: anandk,
    name: "Dr. Anand Kumar M",
    institution: "NIT Surathkal",
  },
  {
    img: sandeep,
    name: "Dr. Sandeep Vashist",
    title: "Senior Global IVD Product Director",
    institution: "Fapon Biotech Inc.",
  },
  {
    img: devashish,
    name: "Dr. Devashish Rath",
    institution: "Homi Bhabha National Institute , BARC, Mumbai",

  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1590,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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

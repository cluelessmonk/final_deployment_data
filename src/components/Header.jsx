import React from "react";
import banner from "../images/bannerimagefinal.jpg";
import institutionLogo from "../images/mnnitlogo.png"; // Replace with the actual path to your institution logo
import conferenceLogo from "../images/confrencelogo.png"; // Replace with the actual path to your conference logo
function Header() {
  return (
    <div className="relative w-full h-[75vh] mb-4">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img
        src={banner}
        alt="Banner Background"
        className="w-full h-full object-cover"
        style={{ width: "200%" }}
      />
      <div className="absolute inset-0 flex items-center justify-between p-8 z-20">
        <img
          src={institutionLogo}
          alt="Institution Logo"
          className="h-48 md:h-64"
        />
        <div className="text-center text-white">
          <h1 className="text-7xl font-bold">"ADT-2024"</h1>
          <h4 className="text-2xl mt-2 bold">15 - 17 November 2024</h4>
          <h1 className="text-6xl font-bold mt-2">
            Advancements in Diagnostic Technologies
          </h1>
          <h2 className="text-4xl mt-2">Global Healthcare Monitoring</h2>
          <h3 className="text-3xl mt-4">Organized By</h3>
          <h4 className="text-2xl mt-2">Department of Biotechnology</h4>
          <h4 className="text-2xl">
            Motilal Nehru National Institute of Technology
            Allahabad,Prayagraj,India
          </h4>
        </div>
        <img
          src={conferenceLogo}
          alt="Conference Logo"
          className="h-48 md:h-64"
        />
      </div>
    </div>
  );
}

export default Header;

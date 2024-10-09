import React, { useState } from "react";

// Sample images for Chief Guest and Guest of Honour
import chiefGuestImage from "../images/chiefguest.jpg"; // Replace with actual image
import guestHonourImage from "../images/honorguest.jpg"; // Replace with actual image

const ChiefGuestSection = () => {
    // State to manage modals
    const [isChiefGuestModalOpen, setChiefGuestModalOpen] = useState(false);
    const [isGuestHonourModalOpen, setGuestHonourModalOpen] = useState(false);
  
    // Handlers for modals
    const openChiefGuestModal = () => setChiefGuestModalOpen(true);
    const closeChiefGuestModal = () => setChiefGuestModalOpen(false);
    
    const openGuestHonourModal = () => setGuestHonourModalOpen(true);
    const closeGuestHonourModal = () => setGuestHonourModalOpen(false);
  
    return (
      <section className="py-20 px-4 bg-yellow-100 text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Chief Guest & Guest of Honour</h2>
          <div className="flex justify-center items-center mt-8 space-x-8">
            {/* Chief Guest */}
            <div className="w-1/2 cursor-pointer">
              <div
                onClick={openChiefGuestModal}
                className="relative w-full h-96 transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={chiefGuestImage}
                  alt="Chief Guest"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-semibold">Prof. Suman Chakraborty</h3>
                <p className="text-lg text-gray-600">IIT Kharagpur, India</p>
              </div>
            </div>
  
            {/* Guest of Honour */}
            <div className="w-1/2 cursor-pointer">
              <div
                onClick={openGuestHonourModal}
                className="relative w-full h-96 transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={guestHonourImage}
                  alt="Guest of Honour"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-semibold">Prof. Elizabeth Hall</h3>
                <p className="text-lg text-gray-600">Cambridge University, UK</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Chief Guest Modal */}
        {isChiefGuestModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-lg">
              <h2 className="text-2xl font-bold mb-4">Prof. Suman Chakraborty</h2>
              <p>
                Prof. Suman Chakraborty is a professor at the Department of Mechanical Engineering, IIT Kharagpur. 
                He has been awarded numerous prestigious fellowships and prizes including the J. C. Bose National 
                Fellowship (2018), and the Santi Swaroop Bhatnagar Prize (2013). He is renowned for his work on 
                microfluidics, nanofluidics, and low-cost medical diagnostic devices for community healthcare.
              </p>
              <button
                onClick={closeChiefGuestModal}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
  
        {/* Guest of Honour Modal */}
        {isGuestHonourModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-lg">
              <h2 className="text-2xl font-bold mb-4">Prof. Elizabeth Hall</h2>
              <p>
                Prof. Lisa Hall is a leader in the field of Analytical Biotechnology at Cambridge University. 
                She focuses on improving access to diagnostics, especially in low- and middle-income countries. 
                She has been recognized with multiple awards, including a CBE from the Queen in 2015 and the 
                MRC Millennium Medal in 2022.
              </p>
              <button
                onClick={closeGuestHonourModal}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    );
  };
  


  

export default ChiefGuestSection;

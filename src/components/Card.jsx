import React from "react";

const Card = ({ member, customStyles, initialColor }) => {
  return (
    <div
      className={`relative transform transition-transform duration-300 hover:scale-105 ${customStyles} rounded-lg shadow-lg p-6 overflow-hidden`}
      style={{ backgroundColor: initialColor }}
    >
      <div className="relative h-full w-full group">
        <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-500">
          <img
            src={member.image}
            alt={member.name}
            className="w-40 h-40 rounded-full object-cover mb-6 mx-auto"
          />
          <div className="text-center">
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="">{member.role}</p>
            <p className="">{member.department}</p>
            <p className="">{member.college}</p>
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 text-white p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <img
            src={member.image}
            alt={member.name}
            className="w-48 h-48 object-cover mb-4"
          />
          <h2 className="text-2xl font-semibold text-center">{member.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;

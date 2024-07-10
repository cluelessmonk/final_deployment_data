import React from "react";

const Committee = () => {
  const organizingCommittee = [
    {
      role: "Patron",
      name: "Prof. Rama S. Verma",
      department: "Director",
      college: "MNNIT Allahabad",
    },
    {
      role: "Chairperson",
      name: "Head",
      department: "Department of Biotechnology",
      college: "MNNITA",
    },
    {
      role: "Treasurer",
      name: "Dr. Joybrata Mal",
      department: "Department of Biotechnology",
      college: "MNNIT Allahabad",
    },
  ];

  const organizingSecretaries = [
    {
      name: "Dr. Manisha Sachan",
      department: "Department of Biotechnology",
      college: "MNNIT Allahabad",
    },
    {
      name: "Dr. Seema Nara",
      department: "Department of Biotechnology",
      college: "MNNIT Allahabad",
    },
  ];

  const organizingCoordinators = [
    {
      name: "Dr. Rajitha B.",
      department: "Department of Computer Science and Engineering",
      college: "MNNIT Allahabad",
    },
    {
      name: "Dr. Girijesh Patel",
      department: "Department of Biotechnology",
      college: "MNNIT Allahabad",
    },
    {
      name: "Dr. Nirmal Ch. Roy",
      department: "Department of Electronics and Communication Engineering",
      college: "MNNIT Allahabad",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 overflow-x-auto text-base">
      <header className="text-center mb-8">
        <h1 className="text-3xl underline text-gray-800 font-bold">
          Organizing Committee
        </h1>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <h2 className="text-xl underline text-center font-bold py-4 bg-gray-200">
            Organizing Committee
          </h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-gray-100 border-b">Role</th>
                <th className="px-4 py-2 bg-gray-100 border-b">Name</th>
                <th className="px-4 py-2 bg-gray-100 border-b">College</th>
              </tr>
            </thead>
            <tbody>
              {organizingCommittee.map((member, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{member.role}</td>
                  <td className="border px-4 py-2">
                    {member.name}, {member.department}
                  </td>
                  <td className="border px-4 py-2">{member.college}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <h2 className="text-xl underline text-center font-bold py-4 bg-gray-200">
            Organizing Secretary(s)
          </h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-gray-100 border-b">Name</th>
                <th className="px-4 py-2 bg-gray-100 border-b">Department</th>
                <th className="px-4 py-2 bg-gray-100 border-b">College</th>
              </tr>
            </thead>
            <tbody>
              {organizingSecretaries.map((member, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{member.name}</td>
                  <td className="border px-4 py-2">{member.department}</td>
                  <td className="border px-4 py-2">{member.college}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <h2 className="text-xl underline text-center font-bold py-4 bg-gray-200">
            Organizing Coordinator(s)
          </h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-gray-100 border-b">Name</th>
                <th className="px-4 py-2 bg-gray-100 border-b">Department</th>
                <th className="px-4 py-2 bg-gray-100 border-b">College</th>
              </tr>
            </thead>
            <tbody>
              {organizingCoordinators.map((member, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{member.name}</td>
                  <td className="border px-4 py-2">{member.department}</td>
                  <td className="border px-4 py-2">{member.college}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Committee;

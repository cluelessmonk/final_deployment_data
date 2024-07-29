import React from "react";

const FeeStructure = () => {
  return (
    <div className="p-4">
      <h2 className="text-5xl font-bold text-blue-600 text-center mb-9 ">
        Fee Structure
      </h2>

      <div className="overflow-x-auto">
        <table className="bg-white border border-gray-300 mt-8 mx-auto w-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-200 border">
                Category of Participants
              </th>
              <th className="px-4 py-2 bg-gray-200 border">Early Bird</th>
              <th className="px-4 py-2 bg-gray-200 border">Late/Onspot</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Student (UG/PG) (INR)</td>
              <td className="border px-4 py-2">3000</td>
              <td className="border px-4 py-2">4000</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                PhD/Postdoc/Research Fellow (INR)
              </td>
              <td className="border px-4 py-2">4000</td>
              <td className="border px-4 py-2">5000</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Academia (INR)</td>
              <td className="border px-4 py-2">8000</td>
              <td className="border px-4 py-2">10000</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Industries (INR)</td>
              <td className="border px-4 py-2">10000</td>
              <td className="border px-4 py-2">12000</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Foreign Delegates (USD)</td>
              <td className="border px-4 py-2">300</td>
              <td className="border px-4 py-2">400</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl underline text-red-700 mt-8 text-center bold ">
        !! Fee includes registration charges, refreshments served during the
        events and the conference kit. !!
      </h2>

      <div className="flex justify-center items-center my-8">
        <span className="text-blue-500">* * * * *</span>
        <div className="border-t-4 border-blue-500 w-4/5 mx-4"></div>
        <span className="text-blue-500">* * * * *</span>
      </div>

      <h2 className="text-5xl  font-bold text-blue-600 mt-14 mb-3 text-center">
        Bank Account Details
      </h2>

      <div className="overflow-x-auto">
        <table className="bg-white border border-gray-300 mt-8 mx-auto w-auto">
          <tbody>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Account Name</td>
              <td className="border px-4 py-2">SNFCE MNNIT Allahabad</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Account Number</td>
              <td className="border px-4 py-2">10424975574</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">IFSC Code</td>
              <td className="border px-4 py-2">SBIN0002580</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Bank and Branch</td>
              <td className="border px-4 py-2">SBI MNNIT Allahabad</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">SWIFT Code</td>
              <td className="border px-4 py-2">SBININBB828</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeeStructure;

import React from "react";

const FeeStructure = () => {
  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-3xl font-bold text-blue-600 text-center">
        Fee Structure (excluding GST @18%)
      </h2>
      <h3 className="text-lg text-blue-600 mt-4 text-center">
        All the participants are requested to register online at{" "}
        <a href="http://www.mnnit.ac.in/ADT2024" className="text-blue-600 underline">
          www.mnnit.ac.in/ADT2024
        </a>
      </h3>

      <table className="min-w-full bg-white border border-gray-300 mt-8 mx-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200 border">Category of Participants</th>
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
            <td className="border px-4 py-2">PhD/Postdoc/Research Fellow (INR)</td>
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

      <h2 className="text-lg mt-8 text-center">
        *Fee includes registration charges, refreshments served during the events and the conference kit.
      </h2>

      <h2 className="text-3xl font-bold text-blue-600 mt-8 text-center">
        Bank Account Details: -
      </h2>
      <table className="min-w-full bg-white border border-gray-300 mt-8 mx-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200 border">Field</th>
            <th className="px-4 py-2 bg-gray-200 border">Value</th>
          </tr>
        </thead>
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
  );
}

export default FeeStructure;

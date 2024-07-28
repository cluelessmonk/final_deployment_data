import React from "react";

const Registration = () => {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Call for Papers
      </h1>
      <p className="text-lg leading-relaxed text-gray-700 text-justify mb-4">
        We invite researchers, academicians, practitioners, and industry experts
        to submit their original research papers to our conference. Topics of
        interest include but are not limited to:
      </p>
      <ul className="list-disc list-inside text-lg text-blue-700 leading-relaxed mb-8">
        <li>Nanotechnology in diagnostic applications</li>
        <li>Omics technology as new dimension in disease diagnosis</li>
        <li>Advancements in cancer diagnostics</li>
        <li>Development of liquid biopsy-based assays</li>
        <li>Point of care and affordable diagnostics</li>
        <li>Miniaturization and automation of diagnostic methods</li>
        <li>Precision medicine and digital health</li>
        <li>Impact and use of AI and ML in diagnostics</li>
        <li>Advanced imaging techniques for diagnostics</li>
      </ul>
      <p className="text-lg leading-relaxed text-gray-700 text-justify mb-8">
        Submissions must be in PDF format and should not exceed 8 pages. All
        papers will be peer-reviewed, and accepted papers will be published in
        the conference proceedings.
      </p>
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Where To Register
      </h2>
      <p className="text-lg leading-relaxed text-gray-700 text-justify mb-8">
        To register for the conference, please review the fee structure and
        select the topics you are interested in. Click the "Abstract Submission"
        button in the menu bar below to submit your abstract and complete your
        registration.
      </p>
      <h2 className="text-2xl font-semibold text-center text-green-800 mb-6">
        Guidelines for Abstract and Poster Submission
      </h2>
      <p className="text-lg leading-relaxed text-gray-700 text-justify mb-4">
        All participants engaged in original work/projects related to various
        broad areas of the conference are welcome to submit the abstract (250
        words) online through the conference website. Participants submitting an
        abstract must register themselves for the conference. Participants who
        are only participating in the conference may also register. The
        organizing committee reserves the right for accepting or rejecting the
        abstracts. The abstract will only be included in proceedings if the
        registration fee is received.
      </p>
    </div>
  );
};

export default Registration;

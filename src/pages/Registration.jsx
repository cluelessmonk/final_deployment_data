import React from "react";

const Registration = () => {
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/abstractTemplate.docx"; // Ensure this path is correct based on your public directory setup
    link.download = "abstractTemplate.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto font-sans">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Guidelines for Abstract Submission
      </h1>
      <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mb-10">
        <li className="mb-4">
          All participants are welcomed to submit the abstract (250 words)
          online through the conference website related to various broad areas
          of the conference.
        </li>
        <li className="mb-4">
          All Participants attending the conference (with or without abstract)
          must register themselves for the conference in respective categories.
        </li>
        <li className="mb-4">
          To submit the abstract and participate in ADT-2024, you first need to
          fill in the Online Registration Form. Registration process will be
          completed once registration fee is paid.
        </li>
        <li className="mb-4">
          Abstract must be prepared as per the Abstract Template. The template
          for the abstract can be downloaded from the link given below.
        </li>
        <li className="mb-4">
          At least one of the authors named in the abstract must register for
          the conference. Abstracts submitted by the registered authors will
          only be included in the program.
        </li>
        <li className="mb-4">
          Each abstract will be peer reviewed and the organizing committee
          reserves the right for accepting or rejecting the abstracts.
        </li>
      </ul>
      <div className="flex flex-col items-center mb-20">
        <button
          onClick={downloadFile}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-xl mb-4"
        >
          Download Abstract Format
        </button>
        
        <div className="bg-yellow-100 border-l-4 border-r-4 border-yellow-500 text-yellow-700 p-4 text-center mx-auto" role="alert">
        <p className="font-bold">Important Notice</p>
        <p>Kindly log in with your Gmail account to submit the application for conference registration.</p>
      </div>


        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSere_dPHgaJORFS7X9mnDbiBnE9IQz9TSTG37yhMwRLa5pRxw/viewform?vc=0&c=0&w=1&flr=0"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xl text-center"
        >
          Register here!
        </a>
      </div>
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">
        Information for Poster/Oral presentations
      </h2>
      <p className="text-xl leading-relaxed text-gray-700 text-center mb-20 animate-billboard">
        To be updated soon
      </p>
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">
        Awards
      </h2>
      <p className="text-xl leading-relaxed text-gray-700 text-center mb-20">
        Young scientist award will be given to the best presentation in this
        category. In addition, Best Poster and Oral presentation awards will be
        announced in respective categories.
      </p>
      <p className="text-xl leading-relaxed text-gray-700 text-center mb-20">
        Further details in this regard will be updated soon.
      </p>
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">
        Conference Full Length Paper
      </h2>
      <p className="text-xl leading-relaxed text-gray-700 text-center mb-20">
        Selected full length papers may be published in scopus/SCI indexed
        journals in the relevant areas.
      </p>
    </div>
  );
};

export default Registration;

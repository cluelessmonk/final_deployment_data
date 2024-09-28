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
        <li className="mb-4">
          In case, the abstract of any participant is not accepted, the
          registration fee will be refunded back to their accounts after the
          conference is over.
        </li>
      </ul>
      <div className="flex flex-col items-center mb-20">
        <button
          onClick={downloadFile}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-xl mb-4"
        >
          Download Abstract Format
        </button>

        <div
          className="bg-yellow-100 border-l-4 border-r-4 border-yellow-500 text-yellow-700 p-4 text-center mx-auto"
          role="alert"
        >
          <p className="font-bold">Important Notice</p>
          <p>
            Kindly Login with your Gmail account to submit the application for
            conference registration.
          </p>
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
        Information for Poster/Oral Presentations and AWARDS
      </h2>
      <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mb-10">
        <li className="mb-4">
          <strong>Young Scientist Award (YSA):</strong> Conference will have a
          dedicated session for young scientist award in competitive category.
          There is a cash prize of INR 10000/- for the winner of YSA.
          <br />
          <em>Eligibility:</em> Only PhD Scholars (in advanced stage of PhD),
          Postdoctoral fellows, and young faculty or scientists not more than 35
          years of age are eligible to participate and submit an abstract in
          this category. Participants must have at least two research
          publications in SCI journals as first author in the thematic area of
          the conference to qualify.
          <br />
          The presentation shall be 15 minutes (12 minutes presentation and 3
          minutes discussion) with no more than 15 slides.
        </li>
        <li className="mb-4">
          <strong>Oral Presentation Award:</strong> Overall, three best oral
          presentations will be selected by the judging panel. The winners will
          receive a certificate and a cash prize of Rs 5000/- (first prize), Rs
          3000/- (second prize), and Rs 2000/- (third prize) respectively.
          <br />
          <em>Eligibility:</em> Research Scholars (PhD) and Postgraduates (final
          year) are eligible to present their work in this category.
          Presentations will be 10 minutes (8 minutes presentation and 2 minutes
          discussion) with no more than 10 slides.
        </li>
        <li className="mb-4">
          <strong>Poster Presentation Award:</strong> Three best poster
          presentations will be selected by the judging panel. Winners will
          receive a certificate and a cash prize of Rs 5000/- (first prize), Rs
          3000/- (second prize), and Rs 2000/- (third prize) respectively.
          <br />
          <em>Eligibility:</em> Research Scholars (PhD), Postgraduates, and
          undergraduate students are eligible. Poster dimensions will be
          uploaded soon.
        </li>
      </ul>

      <p className="text-xl leading-relaxed text-gray-700 text-center mb-20">
        Further details regarding the poster dimensions and other specifics will
        be updated soon.
      </p>

      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">
        Conference Full-Length Paper
      </h2>
      <p className="text-xl leading-relaxed text-gray-700 text-center mb-20">
        Selected full-length papers may be published in Scopus/SCI indexed
        journals in the relevant areas.
      </p>
    </div>
  );
};

export default Registration;

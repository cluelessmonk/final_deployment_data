import "./styles.css";
function ConferenceDetails() {
  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <br />
      {/* <h1 className="text-center text-white  text-3xl  font-semibold ">
        Important Dates
      </h1> */}

      <button className="SubmityourAbstract-button mx-auto text-3xl my-8 py-4 px-8 rounded-lg bg-blue-600 text-white text-2xl font-bold block">
        Submit Your Abstract
      </button>

      <h1 className="text-center text-blue-600 text-lg font-bold">
        <span className="animate-blink">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSere_dPHgaJORFS7X9mnDbiBnE9IQz9TSTG37yhMwRLa5pRxw/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link"
            target="_blank"
            className="hover:underline"
          >
            Submit your Abstract here!
          </a>
        </span>
      </h1>

      <button className="ImportantDates-button mx-auto my-8 py-4 px-8 rounded-lg bg-blue-600 text-white text-2xl font-bold block">
        Important Dates
      </button>

      <table className="mx-auto my-8 border-collapse border border-black">
        <thead>
          <tr>
            <th className="border border-black px-4 py-2">Event</th>
            <th className="border border-black px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black px-4 py-2">
              Registration Opening
            </td>
            <td className="border border-black px-4 py-2">
              1<sup>st</sup> August 2024
            </td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">
              Abstract Submission Deadline
            </td>
            <td className="border border-black px-4 py-2">
              30<sup>th</sup> September 2024
            </td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">
              Acceptance and Notification
            </td>
            <td className="border border-black px-4 py-2">
              15<sup>th</sup> October 2024
            </td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">
              Early Bird Registration
            </td>
            <td className="border border-black px-4 py-2">
              30<sup>th</sup> September 2024
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ConferenceDetails;

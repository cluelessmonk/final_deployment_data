import React from "react";

function ContactUs() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h3 className="text-3xl font-bold mt-3 mb-3 text-center">Contact Us</h3>
      <div className="text-2xl mt-3 mb-3 text-center">
        <p>
          <strong>Website:</strong>{" "}
          <a
            href="http://www.mnnit.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            http://www.mnnit.ac.in/
          </a>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:adt2024@mnnit.ac.in"
            className="text-blue-600 underline"
          >
            adt2024@mnnit.ac.in
          </a>
        </p>
        <p>
          <strong>Mobile:</strong> +919984421252, +919044533554
        </p>
        <p>
          <strong>Phone:</strong> 91-5322271237, 1238
        </p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Send Us a Message
        </h2>
        <div className="flex justify-center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeWwfeBoDfrJHHrt58QZWdKiooInFUk7YOcLT_5AXdXg70gbw/viewform?embedded=true"
            width="640"
            height="718"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

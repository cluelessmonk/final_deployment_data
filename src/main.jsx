import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { useState, useEffect } from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Committee from "./pages/Committee";
import Homepage from "./pages/Homepage";
import Keynote_Speakers from "./pages/Keynote_Speakers";
import Program_Schedule from "./pages/Program_Schedule";
import SpecialSessions from "./pages/Special_Session";
import Track_Chairs from "./pages/Track_Chairs";
import Tutorial_Speakers from "./pages/Tutorial_Speakers";
import ConferenceInfo from "./pages/ConferenceInfo";
import FeeStructure from "./pages/FeeStructure";
import SubmitYourPaper from "./pages/SubmitYourPaper";
import ContactUs from "./pages/ContactUs";
import Programme from "./pages/Programme";
import AboutDepartment from "./pages/AboutDepartment";
import AboutInstitute from "./pages/AboutInstitute";
import Topics from "./pages/Topics";
import HowToReach from "./pages/Howtoreach";
import Accommodation from "./pages/Accomodation";
import Registration from "./pages/Registration";

import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "committee",
        element: <Committee />,
      },
      {},
      {
        path: "keynote_speakers",
        element: <Keynote_Speakers />,
      },
      {
        path: "programme_schedule",
        element: <Program_Schedule />,
      },
      {
        path: "special_session",
        element: <SpecialSessions />,
      },
      {
        path: "track_chairs",
        element: <Track_Chairs />,
      },
      {
        path: "tutorial_speakers",
        element: <Tutorial_Speakers />,
      },
      {
        path: "conference_info",
        element: <ConferenceInfo />,
      },
      {
        path: "fee_structure",
        element: <FeeStructure />,
      },
      {
        path: "submit_your_paper",
        element: <SubmitYourPaper />,
      },
      {
        path: "contact_us",
        element: <ContactUs />,
      },
      {
        path: "programme",
        element: <Programme />,
      },
      {
        path: "about_department",
        element: <AboutDepartment />,
      },
      {
        path: "about_institute",
        element: <AboutInstitute />,
      },
      {
        path: "topics",
        element: <Topics />,
      },
      {
        path: "how_to_reach",
        element: <HowToReach />,
      },
      {
        path: "accomodation",
        element: <Accommodation />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

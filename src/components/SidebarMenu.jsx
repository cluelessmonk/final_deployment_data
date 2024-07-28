import { Link, useLocation } from "react-router-dom";

const topics = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Committee", path: "/committee" },

  { id: 4, title: "About Institute", path: "/about_institute" },
  { id: 5, title: "About Department", path: "/about_department" },
  { id: 7, title: "Topics", path: "/topics" },
  { id: 8, title: "Fee Structure", path: "/fee_structure" },
  { id: 6, title: "Registration & guidelines", path: "/registration" },
  { id: 9, title: "Abstract Submission", path: "/submit_your_paper" },

  { id: 3, title: "Venue and Accomodation", path: "/accomodation" },
  { id: 10, title: "How To Reach", path: "/how_to_reach" },

  { id: 12, title: "Programme", path: "/programme" },
  { id: 11, title: "Contact Us", path: "/contact_us" },
];

const TopicCard = ({ title, path, isActive, isEven }) => (
  <div
    className={`rounded-lg shadow-lg p-4 flex flex-col items-center justify-center transition duration-300 ease-in-out ${
      isEven ? "bg-sky-100" : "bg-amber-200"
    } ${
      isActive
        ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-blue-100 shadow-blue-500/50"
        : ""
    }`}
  >
    <h2 className="text-xl font-semibold mb-2 text-center">{title}</h2>
    <Link
      to={path}
      className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
    >
      View More
    </Link>
  </div>
);

const TopicsGrid = () => {
  const location = useLocation();
  return (
    <div className="container mx-auto py-12 bg-yellow-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {topics.map((topic, index) => (
          <TopicCard
            key={topic.id}
            title={topic.title}
            path={topic.path}
            isActive={location.pathname === topic.path}
            isEven={(Math.floor(index / 4) + index) % 2 === 0}
          />
        ))}
      </div>
      <hr className="my-6 border-t-2 border-black" />
    </div>
  );
};

export default TopicsGrid;

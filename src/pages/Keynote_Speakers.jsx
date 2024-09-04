import bnr from "../images/img2.avif";
import moreToCome from "../images/moretocome.png";
import styles from "../styles/Keynote_Speaker.module.css";
import p1 from "../images/Picture1.jpg";
import p2 from "../images/Picture2.jpg";
import p3 from "../images/Picture3.jpg";
import p4 from "../images/Picture4.jpg";
import p5 from "../images/Picture5.jpg";
import p6 from "../images/Picture6.jpg";

const speakers = [
  {
    img: p1,
    name: "Prof. Satish Raghvan",
    title: "Dept. of Biochemistry",
    institution: "IISc Bangalore",
  },
  {
    img: p2,
    name: "Prof. Bushra Ateeq",
    title: "BSBE",
    institution: "IIT Kanpur",
  },
  {
    img: p3,
    name: "Prof. Cathal Gurrin",
    title: "School of Computing",
    institution: "Dublin City University, Ireland",
  },
  {
    img: p4,
    name: "Prof. Uday C Ghoshal",
    title: "Senior Consultant",
    institution: "Gastroenterology Apollo Multispeciality Hospitals, Kolkata",
  },
  {
    img: p5,
    name: "Dr. Evgeny G. Izumchenko",
    institution: "University of Chicago",
  },
  {
    img: p6,
    name: "Dr. Arindam Chakraborty",
    institution: "Enzene Biosciences, Pune",
  },
];

const invitedSpeakers = [
  { name: "Prof. Siddharth S Gosh", institution: "IIT Guwahati" },
  { name: "Prof. Sateesh Babu", institution: "Amrita University, Coimbatore" },
  { name: "Prof. Subhash Chandra Bose Gopinath", institution: "UNIMAP, Malaysia" },
  { name: "Prof. Ashok Sharma", institution: "AIIMS Delhi" },
  { name: "Dr. Moh’d Khushman", institution: "Washington University, St. Louis, USA" },
  { name: "Dr. Kanhiya Singh", institution: "PITsburg University" },
  { name: "Dr. Pranjal Chandra", institution: "IIT BHU" },
  { name: "Dr. Gorachand Dutta", institution: "IIT KGP" },
  { name: "Dr. Tarun Kumar Sharma", institution: "Ahmedabad" },
  { name: "Dr. Saurabh Kumar", institution: "NIPER Guwahati" },
  { name: "Dr. Zineb Qmichou", institution: "MAScIR Morocco" },
  { name: "Dr. Aastha Mishra", institution: "IGIB, New Delhi" },
  { name: "Dr. Prasoon Kumar", institution: "NIT Rourkela" },
  { name: "Dr. Anand Kumar M", institution: "NIT Surathkal" },
  {name: "Dr. Devashish Rath",institution:"Homi Bhabha National Institute BARC, Mumbai"}
];

const ProfileCard = ({ img, name, title, institution }) => (
  <div className={styles.profile_card}>
    <img
      src={img}
      style={{
        height: "100px",
        width: "100px",
        borderRadius: "50%",
        marginBottom: "20px",
      }}
      alt="Profile Picture"
    />
    <h2>{name}</h2>
    <p>{title}</p>
    <p>{institution}</p>
  </div>
);

const InvitedSpeakerCard = ({ name, institution }) => (
  <div className={styles.container}>
    <b>{name}</b>
    <p>{institution}</p>
    <br />
  </div>
);

function Keynote_Speakers() {
  return (
    <div
      style={{
        backgroundImage: "url('back.png')",
        backgroundRepeat: "repeat-y",
        backgroundSize: "1655px 1250px",
      }}
    >
      <div className="mb-3">
        <h1 className={styles.font}><b>KeyNote Speaker</b></h1>
        {speakers.map((speaker, index) => (
          <div key={index}>
            <ProfileCard {...speaker} />
            <br />
          </div>
        ))}
      </div>
      <div style={{ backgroundColor: "white", padding: "20px"}}>
        <h1 className={styles.font}><b>Invited Speakers</b></h1>
        <br />
        {invitedSpeakers.map((speaker, index) => (
          <InvitedSpeakerCard key={index} {...speaker} />
        ))}
      </div>
    </div>
  );
}

export default Keynote_Speakers;

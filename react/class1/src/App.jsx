import BioData from "./Components/BioData.jsx";
import "./App.css";

const bioDataInfo = [
  {
    name: "Kabya Kishor Halder",
    age: 28,
    address: "Pirojpur, Bangladesh",
    occupation: "Student",
    phone: "+8801750084574",
    email: "kabyakishor017@gmail.com",
    skills: ["html", "css", "bootstrap", "tailwind", "javascript", "react"],
    hobbies: ["coding", "gaming", "traveling", "photography", "cooking"],
  },
  {
    name: "John Doe",
    age: 30,
    address: "New York, USA",
    occupation: "Software Engineer",
    phone: "+1234567890",
    email: "qBk6y@example.com",
    skills: [
      "Python",
      "Django",
      "JavaScript",
      "React",
      "Node.js",
      "SQL",
      "HTML",
      "CSS",
    ],
    hobbies: ["gaming", "traveling", "photography", "cooking"],
  },
];
function App() {
  return (
    <>
      {bioDataInfo.map((bioData) => (
        <BioData
          name={bioData.name}
          age={bioData.age}
          address={bioData.address}
          occupation={bioData.occupation}
          phone={bioData.phone}
          email={bioData.email}
          skills={bioData.skills}
          hobbies={bioData.hobbies}
        />
      ))}
      ,
      {/* <BioData
        name="John Doe"
        age={30}
        address="New York, USA"
        occupation="Software Engineer"
        phone="+1234567890"
        email="qBk6y@example.com"
        skills={[
          "Python",
          "Django",
          "JavaScript",
          "React",
          "Node.js",
          "SQL",
          "HTML",
          "CSS",
        ]}
        hobbies={["gaming", "traveling", "photography", "cooking"]}
      /> */}
    </>
  );
}

export default App;

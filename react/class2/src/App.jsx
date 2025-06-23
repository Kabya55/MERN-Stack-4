import "./App.css";

// Conditional Rendering
// function Item({ isPacked, name }) {
//   const checkMark = isPacked && "✔️";
//   const checkMarked = !isPacked && "❌";
//   return (
//     <li className="item">
//       {name} {checkMark} {checkMarked}
//     </li>
//   );
// }

// function App() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item isPacked={true} name="Space suit" />
//         <Item isPacked={true} name="Helmet with a golden leaf" />
//         <Item isPacked={false} name="Photo of Tam" />
//       </ul>
//     </section>
//   );
// }

// export default App;

// Rendering Lists
// function App() {
//   const people = [
//     "Creola Katherine Johnson: mathematician",
//     "Mario José Molina-Pasquel Henríquez: chemist",
//     "Mohammad Abdus Salam: physicist",
//     "Percy Lavon Julian: chemist",
//     "Subrahmanyan Chandrasekhar: astrophysicist",
//   ];

//   return (
//     <section>
//       <h1>Rendering Lists</h1>
//       <ul>
//         {people.map((person, index) => (
//           <li key={index}>{person}</li>
//         ))}
//       </ul>
//     </section>
//   );
// }

// export default App;

function App() {
  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
    {
      id: 5,
      name: "Kabya Kishor Halder",
      profession: "chemist",
    },
  ];

  const chemist = people.filter((person) => person.profession === "chemist");

  return (
    <section>
      <h1>People Lists</h1>
      <ul>
        {chemist.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </section>
  );
}

export default App;

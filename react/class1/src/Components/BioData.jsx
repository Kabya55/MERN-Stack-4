const BioData = (bio) => {
  return (
    <>
      <h1> BioData of {bio.name}</h1>
      <hr />
      <div className="personal-data">
        <p>Name: {bio.name}</p>
        <p>Age: {bio.age}</p>
        <p>Address: {bio.address}</p>
        <p>Occupation: {bio.occupation}</p>
        <p>phone: {bio.phone}</p>
        <p>Email: {bio.email}</p>
        <hr />
      </div>
      <div className="skills">
        <h2>My Skills</h2>
        <ul>
          {bio.skills.map((skills) => (
            <li key={skills}>{skills}</li>
          ))}
        </ul>
        <hr />
      </div>
      <div className="hobbies">
        <h2>My Hobbies</h2>
        <ul>
          {bio.hobbies.map((hobbies) => (
            <li key={hobbies}>{hobbies}</li>
          ))}
        </ul>
        <br />
        <br />
        {/* <hr /> */}
      </div>
    </>
  );
};
export default BioData;

// components ka reusable korta hola argument akara ja ta pass korbo taka amra props bola

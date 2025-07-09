import React from "react";

const Person = ({ title, name, middleName, count }) => {
  return (
    <div>
      {title} {name} {middleName}
      <p>count is {count}</p>
    </div>
  );
};

export default Person;

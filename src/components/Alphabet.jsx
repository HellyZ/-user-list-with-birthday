import React from "react";

const alp = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const Alphabet = (props) => {
  let { users } = props;

  if (!users || users.length === 0) return <p> No selected employees </p>;
  let alf_users = [];
  for (let letter in alp) {
    alf_users.push([alp[letter], users.forEach((item) =>
    {
      return alp[letter]
    })]);
}
  console.log("Alf_users: " + alf_users);

  return (
    <div>

    </div>
  );
  }

export default Alphabet;

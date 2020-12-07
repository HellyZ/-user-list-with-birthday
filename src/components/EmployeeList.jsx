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
              {/* {
                !employees_list[letter] ? employees_list[letter].map(function(employee){
                <div className="fullName">
                  <div className="left"><b>{employee.lastName} {employee.firstName}</b></div>
                  <div className="right"><input type="checkbox" /></div>
                </div>
              }): 
                  employees_list[letter] = []
              } */}
const displayEmployees = (props) => {
  let {object} = props;

  return (
  <>
  {object.forEach((entry) => {
    <div className="fullName">
    <div className="left">
      <b>{entry.lastName} {entry.firstName}</b>
      </div>
    <div className="right">
      <input type="checkbox" />
      </div>
   </div>
  })}
    {/* <div className="fullName">
      <div className="left">
        <b>{lastName} {firstName}</b>
        </div>
      <div className="right">
        <input type="checkbox" />
        </div>
     </div> */}
  </>
  )

}

const EmployeeList = (props) => {
  let { users } = props;
  if (!users) {
    users = [];
  } else console.log("EmployeeList");

  let employees_list = {};

  users.forEach((item) => {
    let nameLetter = item.lastName[0];
    if (!employees_list[nameLetter]) {
      employees_list[nameLetter] = [];
    }

    employees_list[nameLetter].push(item);
  });

  Object.entries(employees_list).sort((el) => {
    el[1].sort((a, b) => (a.lastName > b.lastName ? 1 : -1));
  });

  if (!users || users.length === 0){
    console.log("something wrong");
    return <p> Some troubles with users list loading. </p>;
  }

  return (
    <div>
      <h1> Employees </h1>{" "}
      <div className="namesBlock">
      {alp.map((letter) => {
        console.log("employees_list[letter]" + employees_list[letter]);
        return (
          <div className="namesBlock-item">
            <h3><strong> {letter} </strong></h3>
            <div className="item-card">
                <div>{employees_list[letter] && employees_list[letter].sort().map((item) => {
                  return (
                    <div className="fullName">
                      <div className="left"><b>{item.lastName} {item.firstName}</b></div>
                      <div className="right"><input type="checkbox" /></div>
                    </div>
                  )
                })}</div>
            </div>
          </div>
        )
        })}{" "}
        </div>
    </div>
  );
};

export default EmployeeList;

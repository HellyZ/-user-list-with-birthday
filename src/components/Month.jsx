import React from "react";
import moment from "moment";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Month = (props) => {
  const { users } = props;

  let month_users = {};

  users.forEach((item) => {
    let birthdayMonth = moment(item.dob).month();

    if (!month_users[birthdayMonth]) {
      month_users[birthdayMonth] = [];
    }

    month_users[birthdayMonth].push(item);
  });
  // console.log(month_users);

  return (
    <div>
      <h1>Employees birthday</h1>
      <hr />
      <div className="line">
      {Object.entries(month_users).map((elements) => {
        return (
          <>
            <h3>{monthNames[Number.parseInt(elements[0])]}</h3>
            <ul >
              {elements[1].sort((a,b) => new Date(a.dob) - new Date(b.dob)).map((item, key) => {
                return (
                  <li className="liItem">
                    <b>{item.lastName} {item.firstName} -{" "}
                    {moment(item.dob).format("DD MMMM[,] YYYY")} year
                    </b>
                  </li>
                );
              })}
            </ul>
          </>
        );
      })}
      </div>
    </div>
  );
};

export default Month;

import React from "react";
import Month from "./Month";

const BirthdayList = (props) => {
  const { users } = props;

  if (!users || users.length === 0) return <p> No selected employees </p>;
  return (
    <>
      <Month users={users} />
    </>
  );
};

export default BirthdayList;

import React from "react";
import HOC from "./HOC";

const UsersList = ({ data }) => {
  const renderUsers = data.map((x) => {
    return <div key={x.id}>{x.name}</div>;
  });

  return <div>{renderUsers}</div>;
};
const User = HOC(UsersList, "user", "UserList");
export default User;

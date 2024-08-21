import React, { useEffect, useState } from "react";
import UserRow from "./user-row";
import UserHead from "./user-head";

const UserList = () => {
  const [users, setUsers] = useState();
  const getEmployeesData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { users } = await res.json();
    setUsers(users);
  };

  useEffect(() => {
    getEmployeesData();
  }, []);

  console.log("users", users);
  return (
    <div className="overflow-x-auto w-5/6 m-auto pt-10">
      <table className="table">
        <UserHead />
        <tbody>
          {users?.map((user) => (
            <UserRow user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

import React, { useEffect, useState } from "react";
import UserRow from "./user-row";
import UserHead from "./user-head";

// const employees = [{eid:1,firstname:"Bold",lastname:"Даваа",email:"naraa@gmail.com",position:"Developer",profileImg:"https://img.daisyui.com/images/profile/demo/2@94.webp"}]

const UserList = () => {
  const [users, setUsers] = useState();
  const [deleteUsers, setDeleteUsers] = useState("employees");

  const getEmployeesData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { users } = await res.json();
    setUsers(users);
  };

  useEffect(() => {
    getEmployeesData();
  }, []);

  // const deleteUser = (userId) => {
  //   console.log("userId", userId);
  //   const {employees} = {employees}.filter((user) => user.id !== userId);
  //   console.log("deleteUser", deletedUser);
  //   setDeleteUsers(employees);
  // };

  console.log("users", users);
  return (
    <div className="overflow-x-auto pt-10">
      <table className="table">
        <UserHead />
        <tbody>
          {users?.map((user) => (
            <UserRow 
              user={user}
              // deleteUser={deleteUser}
             />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

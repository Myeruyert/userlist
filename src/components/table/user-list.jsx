import React, { useEffect, useState } from "react";
import UserRow from "./user-row";
import UserHead from "./user-head";
import Label from "../label/label";

// const employees = [{eid:1,firstname:"Bold",lastname:"Даваа",email:"naraa@gmail.com",position:"Developer",profileImg:"https://img.daisyui.com/images/profile/demo/2@94.webp"}]

const UserList = () => {
  const [users, setUsers] = useState();
  const [refetch, setRefetch] = useState(false);
  const [label, useLabel] = useState();

  const getEmployeesData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { users } = await res.json();
    setUsers(users);
  };

  const createEmployee = async () => {
    const res = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: "Saran",
        email: "saran@gmail.com",
        position: "designer",
        profileImg: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      }),
    });
    const { user } = await res.json();
    setUsers([...users, user]);
  };

  const deleteUser = async (userId) => {
    console.log("userId", userId);
    const res = await fetch(`http://localhost:8000/users/${userId}`, {
      method: "DELETE",
    });
    const { user } = await res.json();
    setRefetch(!refetch);
  };

  const editUser = async (userId) => {
    console.log("userId", userId);
    const res = await fetch(`http://localhost:8000/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: "Anu",
        email: "naraa@gmail.com",
        position: "developer",
        profileImg: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      }),
    });
    const { user } = await res.json();
    setRefetch(!refetch);
  };

  const handleChange = (e) => {
    const textInput = e.target.value;
  };

  useEffect(() => {
    getEmployeesData();
  }, [refetch]);

  console.log("users", users);
  return (
    <>
      <div className="flex justify-end">
        {/* <button
          className="btn btn-active btn-primary btn-sm w-32"
          onClick={createEmployee}
        >
          Add a new user
        </button> */}
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Add a new user
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Enter new user information</h3>
            <label className="form-control w-full max-w-xs">
              <div className="label"></div>
              <input
                type="text"
                placeholder="Firstname"
                className="input input-bordered input-sm w-2/3 max-w-xs"
                onChange={handleChange}
              />
              <div className="label"></div>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label"></div>
              <input
                type="text"
                placeholder="Position"
                className="input input-bordered input-sm w-2/3 max-w-xs"
              />
              <div className="label"></div>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label"></div>
              <input
                type="text"
                placeholder="E-mail"
                className="input input-bordered input-sm w-2/3 max-w-xs"
              />
              <div className="label"></div>
            </label>
            <div className="flex gap-3 justify-end">
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn btn-sm" onClick={createEmployee}>
                    Add
                  </button>
                </form>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm">Close</button>
                </form>
              </div>
            </div>
          </div>
        </dialog>
      </div>
      <div className="overflow-x-auto pt-10">
        <table className="table">
          <UserHead />
          <tbody>
            {users?.map((user) => (
              <UserRow
                user={user}
                deleteUser={deleteUser}
                editUser={editUser}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;

import React, { useEffect, useState } from "react";
import UserRow from "./user-row";
import UserHead from "./user-head";
import Label from "../label/label";
import EditButton from "../editButton/edit-button";

const UserList = () => {
  const [users, setUsers] = useState();
  const [refetch, setRefetch] = useState(false);

  const getEmployeesData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { users } = await res.json();
    setUsers(users);
  };

  const saveInfo = async () => {
    const usernameInput = document?.getElementById("username-input");
    const mailInput = document?.getElementById("email-input");
    const positionInput = document?.getElementById("position-input");

    const res = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: usernameInput.value,
        email: mailInput.value,
        position: positionInput.value,
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
    const usernameInput = document?.getElementById("username-input");
    const mailInput = document?.getElementById("email-input");
    const positionInput = document?.getElementById("position-input");
    console.log("userId", userId);
    const res = await fetch(`http://localhost:8000/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: usernameInput.value,
        email: mailInput.value,
        position: positionInput.value,
        profileImg: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      }),
    });
    const { user } = await res.json();
    setRefetch(!refetch);
  };

  useEffect(() => {
    getEmployeesData();
  }, [refetch]);

  console.log("users", users);
  return (
    <>
      <div className="flex justify-end">
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Add a new user
        </button>

        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-7">Enter user information</h3>
            <Label />
            <div className="flex gap-3 justify-end">
            <div className="modal-action">
        <form method="dialog">
          <button className="btn btn-sm" onClick={() => editUser(reid)}>
            Edit
          </button>
        </form>
      </div>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn btn-sm" onClick={saveInfo}>
                    Save
                  </button>
                </form>
              </div>
              <div className="modal-action">
                <form method="dialog">
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
                // editUser={editUser}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;

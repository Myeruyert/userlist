import React, { useEffect, useState } from "react";
import UserRow from "./user-row";
import UserHead from "./user-head";
import UserModal from "../user-modal/user-modal";

const UserList = () => {
  const [users, setUsers] = useState();
  const [refetch, setRefetch] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const show = () => {
    setIsOpenModal(true);
  };

  const hide = () => {
    // setIsOpenModal(false)-iig duuddag func
    setIsOpenModal(false);
  };

  const getEmployeesData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { users } = await res.json();
    setUsers(users);
  };

  const saveInfo = async (newUser, email, position) => {
    const res = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: newUser.firstname,
        email: email,
        position: position,
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

  const editUser = async (userId, name, email, position) => {
    console.log("userId", userId);
    const res = await fetch(`http://localhost:8000/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: name,
        email: email,
        position: position,
        profileImg: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      }),
    });
    const { user } = await res.json();
    setRefetch(!refetch);
  };

  const handleSave = (newUser) => {
    console.log("isEdit", isEdit);
    if (isEdit) {
      // update
      // editUser();
    } else {
      // save
      saveInfo();
    }
  };

  const handleEdit = () => {
    setIsEdit(true);
    show();
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
          // onClick={() => document.getElementById("my_modal_5").showModal()}
          onClick={() => {
            show();
            setIsEdit(false);
          }}
        >
          Add a new user
        </button>
        <UserModal
          isOpen={isOpenModal}
          isEdit={isEdit}
          handleSave={handleSave}
          close={hide}
        />
      </div>
      <div className="overflow-x-auto pt-10">
        <table className="table">
          <UserHead />
          <tbody>
            {users?.map((user) => (
              <UserRow
                user={user}
                deleteUser={deleteUser}
                handleEdit={handleEdit}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;

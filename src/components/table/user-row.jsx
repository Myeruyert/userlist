import React, { useState } from "react";
import UserList from "./user-list";
import UserModal from "../user-modal/user-modal";

const UserRow = ({ user, deleteUser, handleEdit }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleMenu = () => {
    setIsOpenModal(!isOpenModal);
  };
  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="w-12 h-12 mask mask-squircle">
            <img src={user.profileImg} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{user.firstname}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="positionInput">{user.position}</span>
      </td>
      <td>{user.email}</td>
      <td>
        <button
          className="btn btn-outline btn-info btn-sm mr-3"
          // onClick={() => editUser(user.eid)}
          onClick={handleEdit}
        >
          Edit
        </button>
        {isOpenModal && <UserModal />}
        <button
          className="btn btn-outline btn-error btn-sm"
          onClick={() => deleteUser(user.eid)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserRow;

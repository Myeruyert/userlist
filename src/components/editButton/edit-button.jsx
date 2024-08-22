import React from "react";

const EditButton = ({user, editUser})=> {
    return (
        <div className="modal-action">
        <form method="dialog">
          <button className="btn btn-sm" onClick={() => editUser(user.eid)}>
            Edit
          </button>
        </form>
      </div>
    )
};

export default EditButton;
import React, { useState } from "react";
import Label from "../label/label";

const UserModal = ({ isOpen, isEdit, user, handleSave, close }) => {
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();

  return (
    <dialog
      open={isOpen}
      // id="my_modal_5"
      className="modal modal-bottom sm:modal-middle show"
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-7">
          {isEdit ? "Update" : "New"} user information
        </h3>
        <div className="flex flex-col gap-5 my-5">
          <label className="input input-bordered flex items-center gap-2">
            Firstname
            <input
              type="text"
              className="grow"
              placeholder="Daisy"
              id="username-input"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input
              type="email"
              className="grow"
              placeholder="daisy@site.com"
              id="email-input"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Position
            <input
              type="text"
              className="grow"
              placeholder="Developer"
              id="position-input"
            />
          </label>
        </div>
        <div className="flex gap-3 justify-end">
          <div className="modal-action">
            <button
              className="btn btn-sm"
              onClick={() => {
                handleSave({ firstname, lastname });
              }}
            >
              Save
            </button>

            <button className="btn btn-sm" onClick={close}>
              Close
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default UserModal;

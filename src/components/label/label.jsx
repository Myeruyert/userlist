import React from "react";

const Label = () => {
  return (
    <label className="form-control input-sm w-full max-w-xs">
      <div className="label"></div>
      <input
        type="text"
        placeholder="Firstname"
        className="input input-bordered w-full max-w-xs"
      />
      <div className="label"></div>
    </label>
  );
};

export default Label;

import React from "react";

const Label = () => {
  return (
    <div className="flex flex-col gap-5 my-5">
<label className="input input-bordered flex items-center gap-2">
  Firstname
  <input type="text" className="grow" placeholder="Daisy" id="username-input"/>
</label>
<label className="input input-bordered flex items-center gap-2">
  Email
  <input type="email" className="grow" placeholder="daisy@site.com" id="email-input"/>
</label>
<label className="input input-bordered flex items-center gap-2">
  Position
  <input type="text" className="grow" placeholder="Developer" id="position-input"/>
</label>
    </div>

  
  );
};

export default Label;

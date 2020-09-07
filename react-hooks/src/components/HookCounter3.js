import React, { useState } from "react";

function HookCounter3() {
  const [name, setName] = useState({ fname: "", lname: "" });
  return (
    <div>
      <input
        type="text"
        value={name.fname}
        onChange={(e) => {
          setName({ ...name, fname: e.target.value });
        }}
      />
      <input
        type="text"
        value={name.lname}
        onChange={(e) => {
          setName({ ...name, lname: e.target.value });
        }}
      />
      You typed : {name.fname},{name.lname}
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
}

export default HookCounter3;

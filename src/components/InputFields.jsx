import React from "react";
import Containers from "./Container";

const InputFields = ({ onChangeHandler }) => {
  return (
    <>
      <Containers>
        <label style={{ fontSize: 20, fontWeight: "bold" }}> Distance</label>
        <br />
        <input onChange={onChangeHandler} name="distance" id="distance"></input>
      </Containers>

      <Containers>
        <select onChange={onChangeHandler} name="gender" id="gender">
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </Containers>

      <Containers>
        <label style={{ fontSize: 20, fontWeight: "bold" }}>Age</label>
        <br />
        <input onChange={onChangeHandler} name="age" id="age"></input>
      </Containers>
    </>
  );
};

export default InputFields;

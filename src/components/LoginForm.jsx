import React from "react";
import Containers from "./Container";
import { Button, Input } from "semantic-ui-react";

const LoginForm = ({ submitFormHandler }) => {
  return (
    <>
      <label style={{ fontSize: 40, color: "red" }}>Hello and welcome</label>
      <form onSubmit={submitFormHandler} id="login-form">
        <Containers>
          <label style={{ fontSize: 20, fontWeight: "bold" }}>Email </label>
          <Input
            name="email"
            type="email"
            id="email"
            placeholder="put in your email"
          ></Input>
        </Containers>

        <Containers>
          <label style={{ fontSize: 20, fontWeight: "bold" }}>Password </label>
          <Input
            name="password"
            type="password"
            id="password"
            placeholder="put in your password"
          ></Input>
        </Containers>
        <br />
        <Button color="red" id="submit" size="big">
          Submit
        </Button>
      </form>
    </>
  );
};

export default LoginForm;

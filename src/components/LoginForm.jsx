import React from "react";
import Containers from "./Container";
import { Button, Input } from "semantic-ui-react";

const LoginForm = ({ submitFormHandler }) => {
  return (
  /*<LoginForm submitFormHandler={this.onLogin} />*/
    <>
      <h1>Hello and welcome</h1>
    <form onSubmit={submitFormHandler} id="login-form">
      <Containers>
        <label style={{ fontSize: 20, fontWeight: "bold" }}>Email </label>
        <Input name="email" type="email" id="email"></Input>
      </Containers>

      <Containers>
        <label style={{ fontSize: 20, fontWeight: "bold" }}>Password </label>
        <Input name="password" type="password" id="password" placeholder='put in your password'></Input>
      </Containers>
      <br />
      <Button color="red" id="submit">
        Submit
      </Button>
      </form>
    </>
  );
};

export default LoginForm;

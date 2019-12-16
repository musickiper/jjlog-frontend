import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import {Helmet} from "react-helmet";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: ${props => (props.isLoading ? "progress" : "default")};
`;

const Box = styled.div`
  ${props => props.theme.whiteBox};
  width: 100%;
  max-width: 600px;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;

const Link = styled.span`
  color: ${props => props.theme.blueColor};
  cursor: pointer;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
`;

export default ({
  setAction,
  action,
  email,
  username,
  firstName,
  lastName,
  secret,
  onSubmit,
  isLoading
}) => (
  <Wrapper isLoading={isLoading}>
    <Helmet>
      <meta charSet="utf-8"/>
      <title>Auth</title>
    </Helmet>
    <Form>
      {action === "logIn" && (
        <form onSubmit={onSubmit}>
          <Input placeholder={"Email"} {...email} type={"email"} />
          <Button text={"Log In"} />
        </form>
      )}
      {action === "signUp" && (
        <form onSubmit={onSubmit}>
          <Input placeholder={"Email"} {...email} type={"email"} />
          <Input placeholder={"Username"} {...username} />
          <Input placeholder={"First name"} {...firstName} />
          <Input placeholder={"Last name"} {...lastName} />
          <Button text={"Sign Up"} />
        </form>
      )}
      {action === "confirm" && (
        <form onSubmit={onSubmit}>
          <Input placeholder={"Paste your secret"} {...secret} />
          <Button text={"Confirm"} />
        </form>
      )}
    </Form>
    {action === "logIn" && (
      <StateChanger>
        Don't have an account?{" "}
        <Link onClick={() => setAction("signUp")}>Sign up</Link>
      </StateChanger>
    )}
    {action === "signUp" && (
      <StateChanger>
        Have an account? <Link onClick={() => setAction("logIn")}>Log in</Link>
      </StateChanger>
    )}
  </Wrapper>
);

import React, {useState} from 'react';
import styled from "styled-components";
import Input from "../Components/Input";
import Button from "../Components/Button";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox};
  border-radius: 0px;
  width: 100%;
  max-width:600px;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;

const Link = styled.span`
  color: ${props => props.theme.blueColor};
  cursor: pointer;
`;

const Divider = styled.hr`
  margin: 10px 10px;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form{
    width:100%;
      input {
        width:100%;
        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
  }
`;

export default () => {
    const [action, setAction] = useState("logIn");

    return (
        <Wrapper>
            <Form>
                {action === "logIn" ? (
                        <form>
                            <Input placeholder={"Email"}/>
                            <Button text={"Log In"}/>
                        </form>
                    ) :
                    <form>
                        <Input placeholder={"Email"}/>
                        <Input placeholder={"Username"}/>
                        <Input placeholder={"First name"}/>
                        <Input placeholder={"Last name"}/>
                        <Button text={"Sign Up"}/>
                    </form>
                }
            </Form>
            <StateChanger>
                {action === "logIn" ? (
                    <>
                        Don't have an account? <Link onClick={() => setAction("signUp")}>Sign up</Link><br/>
                        <Divider/>
                        Want to come in without sign up? <Link>Click here</Link> 😉
                    </>
                ) : (
                    <>
                        Have an account? <Link onClick={() => setAction("logIn")}>Log in</Link>
                        <Divider/>
                        Want to come in without sign up? <Link>Click here</Link> 😉
                    </>
                )}
            </StateChanger>
        </Wrapper>
    )
}
import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Components/Input";
import Button from "../Components/Button";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled.div`
  ${(props) => props.theme.whiteBox}
  border-radius: 0px;
  width: 350px;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 24px 0;
`;

const Form = styled(Box)`
  padding: 40px;
  margin-bottom: 12px;
  form {
  }
`;

const Link = styled.a`
  cursor: pointer;
`;

export default () => {
  const [action, setAction] = useState("logIn");

  return (
    <Wrapper>
      <Form>
        {action === "logIn" ? (
          <form>
            <Input placeholder={"Username"} />
            <Input placeholder={"Password"} />
            <Button text={"Log in"} />
          </form>
        ) : (
          <form>
            <Input placeholder={"First Name"} />
            <Input placeholder={"Last Name"} />
            <Input placeholder={"Email"} />
            <Input placeholder={"Username"} />
            <Input placeholder={"Password"} />
            <Button text={"Sign up"} />
          </form>
        )}
      </Form>
      <StateChanger>
        {action === "logIn" ? (
          <>
            Don't have an account?{" "}
            <Link onClick={() => setAction("signUp")}>Sign up</Link>
          </>
        ) : (
          <>
            Have an account?{" "}
            <Link onClick={() => setAction("logIn")}>Log in</Link>
          </>
        )}
      </StateChanger>
    </Wrapper>
  );
};

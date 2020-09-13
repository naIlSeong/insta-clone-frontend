import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Components/Input";
import Button from "../Components/Button";
import useInput from "../Hooks/useInput";

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
  const username = useInput("");
  const password = useInput("");

  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");
  const userName = useInput("");

  return (
    <Wrapper>
      <Form>
        {action === "logIn" ? (
          <form>
            <Input placeholder={"Username"} {...username} />
            <Input placeholder={"Password"} {...password} type={"password"} />
            <Button text={"Log in"} />
          </form>
        ) : (
          <form>
            <Input placeholder={"First Name"} {...firstName} />
            <Input placeholder={"Last Name"} {...lastName} />
            <Input placeholder={"Email"} {...email} type={"email"} />
            <Input placeholder={"Username"} {...userName} />
            <Input placeholder={"Password"} {...password} type={"password"} />
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

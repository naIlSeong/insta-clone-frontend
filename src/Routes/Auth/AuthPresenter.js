import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

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

export default ({
  action,
  username,
  firstName,
  lastName,
  setAction,
  email,
  secret,
  onSubmit,
}) => (
  <Wrapper>
    <Form>
      {action === "logIn" && (
        <form onSubmit={onSubmit}>
          <Input placeholder={"Email"} {...email} type={"email"} />
          <Button text={"Log in"} />
        </form>
      )}
      {action === "signUp" && (
        <form onSubmit={onSubmit}>
          <Input placeholder={"Email"} {...email} type={"email"} />
          <Input placeholder={"First Name"} {...firstName} />
          <Input placeholder={"Last Name"} {...lastName} />
          <Input placeholder={"Username"} {...username} />
          <Button text={"Sign up"} />
        </form>
      )}
      {action === "confirm" && (
        <form onSubmit={onSubmit}>
          <Input placeholder={"Login Secret"} {...secret} />
          <Button text={"confirm"} />
        </form>
      )}
    </Form>
    {action !== "confirm" && (
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
    )}
  </Wrapper>
);

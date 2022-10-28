import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: black;
`;

const LoginNav = styled.div`
  margin: 1rem;
  background-color: black;
  display: flex;
  justify-content: center;
  height: 125px;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(27, 4, 4, 0.2);
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  font-size: 3rem;
  border-radius: 20px;
  font-weight: bold;
  font-family: monospace;
  color: white;
  background-color: black;
`;

const Logo = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  font-family: monospace;
  color: white;
`;

const Login = () => {
  return (
    <Container>
      <LoginNav>
        <Logo>WHITE-RABBIT</Logo>
        {/* <Button>LOG-IN</Button> */}
      </LoginNav>
      <MainContainer></MainContainer>
    </Container>
  );
};

export default Login;

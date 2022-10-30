import React from "react";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSession, signIn, signOut } from "next-auth/react";

const MainContainer = styled.div`
  display: flex;
  /* width: 100%; */
  /* height: 100%; */
  /* border: #d17777 1px solid; */

  align-items: center;
  margin: 3rem;
  justify-content: center;
`;

const LoginHeader = styled.button``;

const Button = styled.button`
  background-color: #4e1a4e;
  height: 70px;
  width: 200px;
  border-radius: 15px;
  border-color: white;
  font-size: 2rem;
  color: white;
  font-weight: bold;
  font-family: monospace;
`;

const Login = () => {
  const { data: session } = useSession();
  // const getToken

  //   const navigate = useNavigate();
  return (
    <MainContainer>
      <Button onClick={() => signIn()}>Login</Button>
      <Button onClick={() => signOut()}>Logout</Button>
    </MainContainer>
  );
};

// curl -X POST --data "grant_type=client_credentials&client_id=u-s4t2ud-2285edf4522c080a1943c73d97e1e87eeb56e396530688e2b4669e67d695fa16&client_secret=Ms-s4t2ud-a1d2203524e6a0997bcff5ae5c63607d611de1e32771d0a8c9dd2d2bbddc5f56" https://api.intra.42.fr/oauth/token

// url -X POST --data "grant_type=client_credentials&client_id=u-s4t2ud-2285edf4522c080a1943c73d97e1e87eeb56e396530688e2b4669e67d695fa16&client_secret=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" https://api.intra.42.fr/oauth/token

export default Login;

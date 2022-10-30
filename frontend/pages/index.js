import Image from "next/image";
import styled from "styled-components";
import Logo from "./Logo.png";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fbfdff;
`;
const Wrapper = styled.div`
  min-width: 250px;
  width: 50%;
  padding: 40px;
  background-color: #730eff;
  border-radius: 30px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  height: 50%;
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  font-size: 35px;
  color: ${(props) => props.color};
`;

const Button = styled.button`
  width: 30%;
  border: none;
  padding: 15px 20px;
  margin-top: 10px;
  background-color: #414141;
  color: #ee5c44;
  cursor: pointer;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: white 1px solid; */
`;

export default function Home() {
  return (
    <Container>
      <Wrapper>
        <TextContainer>
          <Title color="white">Welcome to </Title>
          <Title color="#08EAFD">42 White Rabbit </Title>
        </TextContainer>
        <ImageContainer>
          <Image src={Logo} />
        </ImageContainer>
        <ButtonContainer>
          <Button onClick={() => signIn()}>SIGN IN WITH 42 ACCOUNT</Button>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
}

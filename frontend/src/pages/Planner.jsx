import React from "react";
import "./Planner.css";
import styled from "styled-components";

const StyledInput = styled.div`
  background-color: violet;
  height: 100px;
  border: 1px black solid;
  border-radius: 5px;
`;

const Planner = () => {
  return (
    <div>
      <StyledInput />
      <StyledInput />
    </div>
  );
};

export default Planner;

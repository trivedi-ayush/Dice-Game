import styled from "styled-components";
import React, { useState } from "react";
const Numberselector = ({
  seterror,
  error,
  selectednumber,
  setselectednumber,
}) => {
  const arrnumber = [1, 2, 3, 4, 5, 6];

  const numberselectorhandler = (value) => {
    setselectednumber(value);
    seterror("");
  };

  return (
    <Numberselectorcontainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrnumber.map((value, i) => (
          <Box
            isselected={value === selectednumber}
            key={i}
            onClick={() => numberselectorhandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </Numberselectorcontainer>
  );
};

export default Numberselector;

const Numberselectorcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700px;
  }

  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (!props.isselected ? "black" : "white")};
`;

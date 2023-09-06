import React from "react";
import { styled } from "styled-components";

const Roledice = ({ roledice, currentdice }) => {
  return (
    <Dicecontainer>
      <div className="dice" onClick={roledice}>
        <img src={`/images/dice/dice_${currentdice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </Dicecontainer>
  );
};

export default Roledice;

const Dicecontainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;

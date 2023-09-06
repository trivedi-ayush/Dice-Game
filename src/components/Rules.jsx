import React from "react";
import { styled } from "styled-components";

const Rules = () => {
  return (
    <Rulescontainer>
      <h2>How to Play Dice Game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on Dice Image</p>
        <p>
          After click on Dice id selected number is equal to Dice number you
          will get same point as Dice
        </p>
        <p>If you get wrong guess then 2 point will be deducted</p>
      </div>
    </Rulescontainer>
  );
};

export default Rules;

const Rulescontainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
  }

  .text {
    margin-top: 24px;
  }
`;

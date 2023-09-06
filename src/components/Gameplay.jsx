import { styled } from "styled-components";
import Numberselector from "./Numberselector";
import Totalscore from "./Totalscore";
import Roledice from "./Roledice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const Gameplay = () => {
  const [score, setscore] = useState(0);
  const [selectednumber, setselectednumber] = useState();
  const [currentdice, setcurrentdice] = useState(1);
  const [error, seterror] = useState("");
  const [showrules, setshowrules] = useState(false);

  const generaterandomnumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roledice = () => {
    if (!selectednumber) {
      seterror("You have not selected any number");
      return;
    }

    const randomnumber = generaterandomnumber(1, 7);
    setcurrentdice((prev) => randomnumber);

    if (selectednumber === randomnumber) {
      setscore((prev) => prev + 1);
    } else {
      setscore((prev) => prev - 2);
    }

    setselectednumber(undefined);
  };

  const resetscore = () => {
    setscore(0);
  };

  return (
    <Maincontainer>
      <div className="top_section">
        <Totalscore score={score} />
        <Numberselector
          error={error}
          seterror={seterror}
          selectednumber={selectednumber}
          setselectednumber={setselectednumber}
        />
      </div>
      <Roledice currentdice={currentdice} roledice={roledice} />

      <div className="btns">
        <OutlineButton onClick={resetscore}>Reset Score</OutlineButton>
        <Button onClick={() => setshowrules((prev) => !prev)}>
          {showrules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showrules && <Rules />}
    </Maincontainer>
  );
};

export default Gameplay;

const Maincontainer = styled.main`
  padding-top: 70px;

  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

import styled from "styled-components";
import Startgame from "./components/Startgame";
import { useState } from "react";
import Gameplay from "./components/Gameplay";

function App() {
  const [isgamestarted, setisgamestarted] = useState(false);

  const togglegameplay = () => {
    setisgamestarted((prev) => !prev);
  };

  return (
    <>{isgamestarted ? <Gameplay /> : <Startgame toggle={togglegameplay} />}</>
  );
}

export default App;

//autor: Jakub Vano (xvanoj00)

import React, { useEffect, useState } from "react";
import "./GameScreen.css";
import Popup from "./components/Popup";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import Sound from "./components/sound";
import Typography from "@mui/material/Typography";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Tutorial from "./components/Tutorial";
import Board from "./components/GameBoard";
import EnemyBoard from "./components/enemyBoard";
import useSound from "use-sound";
import TheEnd from "./components/InTheEnd.mp3";
import EndPopup from "./components/EndPopup";

const GameScreen = ({ navigation }, props) => {
  //end game state
  const [end, setEnd] = useState(false);
  //music handle
  const [play, { pause }] = useSound(TheEnd, { interrupt: true });
  const handlePlay = (event, checked) => {
    if (checked === true) {
      play();
    } else {
      pause();
    }
  };
  //tutorial popup handle
  const [tutorialPopup, setTutorialPopup] = useState(false);
  const onClickHandler = () => {
    navigation.navigate("Start_Screen");
  };
  //getting values from local storage
  const board = JSON.parse(localStorage.getItem("board"));
  const gridColor = JSON.parse(localStorage.getItem("gridColor"));
  const shipColor = JSON.parse(localStorage.getItem("shipColor"));
  const tiny = JSON.parse(localStorage.getItem("tiny"));
  const small = JSON.parse(localStorage.getItem("small"));
  const medium = JSON.parse(localStorage.getItem("medium"));
  const big = JSON.parse(localStorage.getItem("big"));
  return (
    //rendering components on screen
    <div style={{ backgroundImage: "url(/background.png)" }}>
      <div className="sound">
        <FormGroup>
          <Stack direction="row" spacing={1} alignItems="center">
            <Sound
              defaultChecked
              inputProps={{ "aria-label": "ant design" }}
              onChange={(event, checked) => handlePlay(event, checked)}
            />
            <Typography sx={{ color: "white" }}>
              <VolumeUpIcon />
            </Typography>
          </Stack>
        </FormGroup>
        <Button
          sx={{ color: "white" }}
          className="tutorial"
          onClick={() => setTutorialPopup(true)}
        >
          <QuestionMarkIcon />
        </Button>
      </div>
      <main>
        <div className="boards">
          <div style={{ flexDirection: "column" }}>
            My board
            <Board
              size={board}
              tiny={tiny}
              small={small}
              medium={medium}
              big={big}
              gridColor={gridColor}
              shipColor={shipColor}
            />
          </div>
          <div style={{ flexDirection: "column" }}>
            Enemy Board
            <EnemyBoard
              size={board}
              tiny={0}
              small={0}
              medium={0}
              big={0}
              gridColor={gridColor}
              shipColor={shipColor}
              setEnd={setEnd}
            />
          </div>
        </div>
        <Button
          onClick={onClickHandler}
          sx={{ margin: 2 }}
          variant="contained"
          size="large"
        >
          EndGame
        </Button>
      </main>
      <EndPopup trigger={end} setTrigger={setEnd}>
        <div sx={{ flexDirection: "row" }}>
          <h2>Congratulations you won!!!</h2>
          <Button
            onClick={onClickHandler}
            sx={{ alignContent: "center", justifyContent: "center" }}
            variant="contained"
            size="large"
            margin="50px"
          >
            EndGame
          </Button>
        </div>
      </EndPopup>
      <Popup trigger={tutorialPopup} setTrigger={setTutorialPopup}>
        <Tutorial></Tutorial>
      </Popup>
    </div>
  );
};

export default GameScreen;

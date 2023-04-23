//autor: Jakub Vano (xvanoj00)

import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./StartScreen.css";
import Popup from "./components/Popup";
import Tutorial from "./components/Tutorial";
import Battleship_logo from "./components/battleship.png";
import Start_logo from "./components/start_img.png";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import Sound from "./components/sound";
import Typography from "@mui/material/Typography";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import useSound from "use-sound";
import TheEnd from "./components/InTheEnd.mp3";

const StartScreen = ({ navigation }, props) => {
  const [buttonPopup, setButtonPopup] = useState(false); //state for tutorial popup
  const enemyBoard = [
    1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  ];
  const hitPoints = 11;

  //handling quickgame button
  const onQuickGame = () => {
    window
      .fetch("/Play", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          enemy: enemyBoard,
          hitpoints: hitPoints,
        }),
      })
      .catch((error) => {
        console.error(error);
      });
    navigation.navigate("Game_Screen");
  };

  //handling music
  const [play, { pause }] = useSound(TheEnd, { interrupt: true });
  const handlePlay = (event, checked) => {
    if (checked === true) {
      play();
    } else {
      pause();
    }
  };
  //handling menu button
  const onMenu = () => {
    navigation.navigate("Menu_Screen");
  };
  return (
    //rendering components on screen
    <div style={{ backgroundImage: "url(/background.png)" }}>
      <div className="soundset">
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
      </div>
      <main>
        <img src={Battleship_logo} className="title" alt="title" />
        <img src={Start_logo} className="logo" alt="logo" />
        <Button
          sx={{ margin: "10px" }}
          onClick={onMenu}
          variant="contained"
          size="large"
        >
          Menu
        </Button>
        <Button
          sx={{ margin: "10px" }}
          onClick={() => setButtonPopup(true)}
          variant="contained"
          size="large"
        >
          Tutorial
        </Button>
        <Button
          sx={{ margin: "10px" }}
          onClick={onQuickGame}
          variant="contained"
          size="large"
        >
          QuickGame
        </Button>
      </main>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <Tutorial></Tutorial>
      </Popup>
    </div>
  );
};

export default StartScreen;

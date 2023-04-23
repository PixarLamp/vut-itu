//autor: Jakub Vano (xvanoj00)

import React, { useState, useEffect } from "react";
import Popup from "./components/Popup";
import Button from "@mui/material/Button";
import Tutorial from "./components/Tutorial";
import "./MenuScreen.css";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import Sound from "./components/sound";
import Typography from "@mui/material/Typography";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Customize from "./components/Customize";
import Settings from "./components/Settings";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Board from "./components/GameBoard";
import useSound from "use-sound";
import TheEnd from "./components/InTheEnd.mp3";

const MenuScreen = ({ navigation }, props) => {
  //music handle
  const [play, { pause }] = useSound(TheEnd, { interrupt: true });
  const handlePlay = (event, checked) => {
    if (checked === true) {
      play();
    } else {
      pause();
    }
  };

  //board size handle
  const [board, setBoard] = React.useState(10);
  const handleDecrement = () => {
    if (board > 7) setBoard(board - 1);
  };
  const handleIncrement = () => {
    if (board < 15) setBoard(board + 1);
  };
  useEffect(() => {
    localStorage.setItem("board", JSON.stringify(board));
  }, [board]);

  //ship color handle
  const [shipColor, setShipColor] = useState("invert(0%)");
  useEffect(() => {
    localStorage.setItem("shipColor", JSON.stringify(shipColor));
  }, [shipColor]);
  //grid color handle
  const [gridColor, setGridColor] = useState("#dae8fc");
  useEffect(() => {
    localStorage.setItem("gridColor", JSON.stringify(gridColor));
  }, [gridColor]);
  //1square ship handle
  const [tiny, setTiny] = React.useState(4);
  const handleTiny = (event, newValue) => {
    if (typeof newValue === "number") {
      setTiny(newValue);
    }
  };
  useEffect(() => {
    localStorage.setItem("tiny", JSON.stringify(tiny));
  }, [tiny]);
  //2square ship handle
  const [small, setSmall] = React.useState(3);
  const handleSmall = (event, newValue) => {
    if (typeof newValue === "number") {
      setSmall(newValue);
    }
  };
  useEffect(() => {
    localStorage.setItem("small", JSON.stringify(small));
  }, [small]);
  //3square ship handle
  const [medium, setMedium] = React.useState(2);
  const handleMedium = (event, newValue) => {
    if (typeof newValue === "number") {
      setMedium(newValue);
    }
  };
  useEffect(() => {
    localStorage.setItem("medium", JSON.stringify(medium));
  }, [medium]);
  //4square ship handle
  const [big, setBig] = React.useState(1);
  const handleBig = (event, newValue) => {
    if (typeof newValue === "number") {
      setBig(newValue);
    }
  };
  useEffect(() => {
    localStorage.setItem("big", JSON.stringify(big));
  }, [big]);

  //ship color handle
  const handleShipColorBlack = () => {
    setShipColor("invert(0%)");
  };
  const handleShipColorGray = () => {
    setShipColor("invert(50%)");
  };
  const handleShipColorWhite = () => {
    setShipColor("invert(100%)");
  };

  //grid color handle
  const handleGridColorRed = () => {
    setGridColor("#d95050");
  };
  const handleGridColorYellow = () => {
    setGridColor("#fcba03");
  };
  const handleGridColorPurple = () => {
    setGridColor("#d050d9");
  };
  const handleGridColorGreen = () => {
    setGridColor("#83ed7e");
  };
  const handleGridColorDef = () => {
    setGridColor("#dae8fc");
  };

  //states for popup, settings, tutorial popup
  const [customizePopup, setCustomizePopup] = useState(false);
  const [settingsPopup, setSettingsPopup] = useState(false);
  const [tutorialPopup, setTutorialPopup] = useState(false);
  const enemyBoard = [
    1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  ];
  const hitPoints = 11;
  //handling the play button
  const onPlay = () => {
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
        <Board
          size={board}
          tiny={tiny}
          small={small}
          medium={medium}
          big={big}
          shipColor={shipColor}
          gridColor={gridColor}
        />
        <Button
          onClick={() => setCustomizePopup(true)}
          sx={{ margin: 1 }}
          size="large"
          variant="contained"
        >
          Customize
        </Button>
        <Button
          onClick={() => setSettingsPopup(true)}
          sx={{ margin: 1 }}
          size="large"
          variant="contained"
        >
          Settings
        </Button>
        <Button
          onClick={onPlay}
          sx={{ margin: 1 }}
          size="large"
          variant="contained"
        >
          Play
        </Button>
      </main>
      <Popup trigger={customizePopup} setTrigger={setCustomizePopup}>
        <Customize
          gridColor={gridColor}
          handleGridColorRed={handleGridColorRed}
          handleGridColorYellow={handleGridColorYellow}
          handleGridColorPurple={handleGridColorPurple}
          handleGridColorGreen={handleGridColorGreen}
          handleGridColorDef={handleGridColorDef}
          shipColor={shipColor}
          handleShipColorBlack={handleShipColorBlack}
          handleShipColorGray={handleShipColorGray}
          handleShipColorWhite={handleShipColorWhite}
        />
      </Popup>
      <Popup
        className="settings"
        trigger={settingsPopup}
        setTrigger={setSettingsPopup}
      >
        <Settings
          board={board}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          tiny={tiny}
          small={small}
          medium={medium}
          big={big}
          onTiny={handleTiny}
          onSmall={handleSmall}
          onMedium={handleMedium}
          onBig={handleBig}
        />
      </Popup>
      <Popup trigger={tutorialPopup} setTrigger={setTutorialPopup}>
        <Tutorial />
      </Popup>
    </div>
  );
};

export default MenuScreen;

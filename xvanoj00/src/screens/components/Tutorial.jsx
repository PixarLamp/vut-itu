//autor: Jakub Vano (xvanoj00)

import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

//text in tutorial popup
const steps = [
  {
    description: `To start a quick game with default game settings, press "QUICKGAME".
                  "MENU" take you to the mmenu screen with settings and customization.
                  In the top left corner you can toggle the music on/off`,
  },
  {
    description: `Menu screen contains aforementioned sound settings as well as Tutorial after pressing question mark in top right corner.
                  Below you can see your board where you can set the position of your ships.
                  "CUSTOMIZE" brings up settings for your ship and grid color.
                  "SETTINGS" brings up setting up the size of a board and number of ships
                  "PLAY" button start the game`,
  },
  {
    description: `When the game starts you get to see your own board as well as the board of your enemy.
                  You take turns with your enemy in trying to destroy others ships. When it's your turn,
                  you fire by pressing the tile on enemies board. The player that destroyes all ships first wins.
                  You can end the game and return to Start screen by pressing "END GAME"`,
  },
];

export default function TextMobileStepper() {
  //handling next/back
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    //rendering components in popup
    <div>
      <Box
        sx={{ height: 150, maxWidth: 600, width: "100%", p: 2, color: "white" }}
      >
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        sx={{ backgroundColor: "#001e3c", color: "white" }}
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            sx={{ color: "white" }}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            sx={{ color: "white" }}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}

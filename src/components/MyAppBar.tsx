import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { useContext } from "react";
import { GameContext } from "../GameContext";

export const MyAppBar = () => {
  const game = useContext(GameContext);
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            color="inherit"
            onClick={() => {
              game.showActionSelection();
            }}
          >
            Back
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { ReactNode, useContext } from "react";
import { GameContext } from "../GameContext";

type MyAppBarProps = {
  actions?: ReactNode;
};

export const MyAppBar = ({ actions }: MyAppBarProps) => {
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

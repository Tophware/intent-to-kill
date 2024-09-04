import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import IntentToKill from "../assets/intent-to-kill-logo.svg";
import MyStack from "../components/MyStack";
import { useGameContext } from "../GameContext";
import { useGameActions } from "../hooks/useGameActions";

const Home: React.FC = () => {
  const { gameState: game } = useGameContext();
  const { startGame } = useGameActions();
  return game ? (
    <MyStack justifyContent={"space-between"}>
      <Box component="img" src={IntentToKill} alt="Intent to Kill" />
      <Stack spacing={4}>
        <Typography variant="h4">New Game</Typography>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => {
            startGame();
          }}
        >
          Starter Motives
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => {
            startGame(false);
          }}
        >
          Random Motives
        </Button>
      </Stack>
      <Box />
    </MyStack>
  ) : (
    <div>Loading...</div>
  );
};

export default Home;

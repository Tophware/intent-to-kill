import { Box, Button } from "@mui/material";
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

      <Button
        variant="outlined"
        color="primary"
        size="large"
        onClick={() => {
          startGame();
        }}
      >
        Start Game
      </Button>
      <Box />
    </MyStack>
  ) : (
    <div>Loading...</div>
  );
};

export default Home;

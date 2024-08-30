import { Box, Button } from "@mui/material";
import React, { useContext } from "react";
import IntentToKill from "../assets/intent-to-kill-logo.svg";
import MyStack from "../components/MyStack";
import { GameContext } from "../GameContext";

const Home: React.FC = () => {
  const game = useContext(GameContext);

  return game ? (
    <MyStack justifyContent={"space-between"}>
      <Box component="img" src={IntentToKill} alt="Intent to Kill" />

      <Button
        variant="outlined"
        color="primary"
        size="large"
        onClick={() => {
          game.initGame();
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

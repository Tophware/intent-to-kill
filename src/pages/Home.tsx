import { Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import MyStack from "../components/MyStack";
import QRCodeURL from "../components/QRCodeURL";
import { GameContext } from "../GameContext";

const Home: React.FC = () => {
  const game = useContext(GameContext);

  return game ? (
    <MyStack>
      <Typography variant="h2" aria-level={1} gutterBottom>
        Intent to Kill
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        size="large"
        onClick={() => {
          game.initGame && game.initGame();
        }}
      >
        Start Game
      </Button>
      <QRCodeURL />
    </MyStack>
  ) : (
    <div>Loading...</div>
  );
};

export default Home;

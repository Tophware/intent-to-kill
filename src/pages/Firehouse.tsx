import { Button } from "@mui/material";
import React, { useContext } from "react";
import MyStack from "../components/MyStack";
import SocialGroupCard from "../components/SocialGroupCard";
import { GameContext } from "../GameContext";

const Firehouse: React.FC = () => {
  const game = useContext(GameContext);
  const lastGroup = game.history[game.history.length - 1];
  return (
    <MyStack>
      <SocialGroupCard group={lastGroup} />
      <Button onClick={game.showActionSelection}>Back</Button>
    </MyStack>
  );
};

export default Firehouse;

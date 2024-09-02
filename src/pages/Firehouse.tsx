import { Button } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import MyStack from "../components/MyStack";
import SocialGroupCard from "../components/SocialGroupCard";
import { useGameContext } from "../GameContext";
import { useGameActions } from "../hooks/useGameActions";

const Firehouse: React.FC = () => {
  const { gameState: game } = useGameContext();
  const { firehouse } = useGameActions();
  const hasRun = useRef<boolean>(false);
  useEffect(() => {
    if (!hasRun.current) {
      console.log("Calling firehouse???");
      firehouse();
      console.log(game?.history);
      hasRun.current = true;
    }
  }, []);

  if (game && game.history) {
    return (
      <MyStack>
        {game.history.length > 0 ? (
          <SocialGroupCard group={game.history[game.history.length - 1]} />
        ) : (
          <div>No history</div>
        )}
        <Button component={Link} to="/">
          Back
        </Button>
      </MyStack>
    );
  } else {
    <Navigate to="/" />;
  }
};

export default Firehouse;

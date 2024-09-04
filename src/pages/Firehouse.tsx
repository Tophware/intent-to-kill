import { Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { Navigate } from "react-router";
import { MyAppBar } from "../components/MyAppBar";
import SocialGroupCard from "../components/SocialGroupCard";
import { useGameContext } from "../GameContext";
import { useGameActions } from "../hooks/useGameActions";

const Firehouse: React.FC = () => {
  const { gameState: game } = useGameContext();
  const { firehouse } = useGameActions();
  const hasRun = useRef<boolean>(false);
  useEffect(() => {
    if (!hasRun.current) {
      firehouse();
      console.log(game?.history);
      hasRun.current = true;
    }
  }, []);

  if (game && game.history) {
    return (
      <>
        <MyAppBar />
        <Container maxWidth="md">
          <Stack pt={2} pb={2} spacing={2}>
            <Typography variant="h4" aria-level={1} gutterBottom>
              Firehouse
            </Typography>
            {game.history.length > 0 ? (
              <SocialGroupCard group={game.history[game.history.length - 1]} />
            ) : (
              <div>No history</div>
            )}
          </Stack>
        </Container>
      </>
    );
  } else {
    <Navigate to="/" />;
  }
};

export default Firehouse;

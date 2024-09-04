import { Button, Container, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { Navigate } from "react-router";
import { MyAppBar } from "../components/MyAppBar";
import SocialGroupCard from "../components/SocialGroupCard";
import { useGameContext } from "../GameContext";
import { useGameActions } from "../hooks/useGameActions";

const MoveCivilians: React.FC = () => {
  const { gameState: game } = useGameContext();
  const { moveCivilians } = useGameActions();
  const hasRun = useRef<boolean>(false);
  const [showDetectiveMovement, setShowDetectiveMovement] =
    React.useState(false);
  useEffect(() => {
    if (!hasRun.current) {
      moveCivilians();
      hasRun.current = true;
    }
  }, []);

  if (game && game.history) {
    return (
      <>
        <MyAppBar disabled={!showDetectiveMovement} />
        <Container maxWidth="md">
          <Stack pt={2} pb={2} spacing={2}>
            <Typography variant="h3" aria-level={1} gutterBottom>
              Move Civilians
            </Typography>
            {game.history.length > 0 ? (
              <Stack direction="column" spacing={2}>
                <Typography variant="h5" aria-level={1} gutterBottom>
                  Murderer
                </Typography>
                <SocialGroupCard
                  group={game.history[game.history.length - 2]}
                />
                <Divider />
                <Typography variant="h5" aria-level={1} gutterBottom>
                  Detective
                </Typography>
                {showDetectiveMovement ? (
                  <SocialGroupCard
                    group={game.history[game.history.length - 1]}
                  />
                ) : (
                  <Button
                    onClick={() => {
                      setShowDetectiveMovement(true);
                    }}
                    variant="contained"
                    fullWidth
                    color="inherit"
                  >
                    Reveal Detective Movement
                  </Button>
                )}
              </Stack>
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

export default MoveCivilians;

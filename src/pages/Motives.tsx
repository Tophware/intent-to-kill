import { Container, Stack, Typography } from "@mui/material";
import { useMemo } from "react";
import { Navigate } from "react-router";
import { MotiveCard } from "../components/MotiveCard";
import { MyAppBar } from "../components/MyAppBar";
import { useGameContext } from "../GameContext";

const Motives = () => {
  const { gameState: game } = useGameContext();

  const sortedMotives = useMemo(() => {
    return game?.motives
      ? game.motives.sort((a, b) => a.name.localeCompare(b.name))
      : [];
  }, [game]);

  return game ? (
    <>
      <MyAppBar />
      <Container maxWidth="md">
        <Stack mt={2} mb={2} spacing={4}>
          <Typography variant="h3">Motives</Typography>
          {sortedMotives.map((motive) => (
            <MotiveCard key={motive.name} motive={motive} />
          ))}
        </Stack>
      </Container>
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default Motives;

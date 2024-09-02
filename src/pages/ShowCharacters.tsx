import { Container, Grid2 as Grid, Typography } from "@mui/material";

import { CharacterCard } from "../components/CharacterCard";
import { MyAppBar } from "../components/MyAppBar";
import { useGameContext } from "../GameContext";

const ShowCharacters = () => {
  const { gameState: game } = useGameContext();

  return (
    <>
      <MyAppBar />
      <Container maxWidth="md">
        <Typography variant="h3" aria-level={1} gutterBottom>
          Characters
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {game.characters?.map((character, index) => (
            <Grid
              size={12}
              key={`${character.name.replace(" ", "-")}-${index}`}
            >
              <CharacterCard character={character} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
export default ShowCharacters;

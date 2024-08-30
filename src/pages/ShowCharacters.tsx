import { Container, Grid2 as Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { GameContext } from "../GameContext";

import { CharacterCard } from "../components/CharacterCard";
import { MyAppBar } from "../components/MyAppBar";

const ShowCharacters = () => {
  const game = useContext(GameContext);

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

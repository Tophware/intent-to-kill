import { Button, Container, Grid2 as Grid, Typography } from "@mui/material";

import {
  Groups as GroupsIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { useMemo, useState } from "react";
import { Navigate } from "react-router";
import { CharacterCard } from "../components/CharacterCard";
import { MyAppBar } from "../components/MyAppBar";
import { useGameContext } from "../GameContext";

const Characters = () => {
  const { gameState: game } = useGameContext();

  const [sortBy, setSortBy] = useState<"group" | "name">("name");

  const sorterCharacters = useMemo(() => {
    return game?.characters
      ? game.characters.sort((a, b) =>
          sortBy === "group"
            ? a.group.localeCompare(b.group) || a.name.localeCompare(b.name)
            : a.name.localeCompare(b.name) || a.group.localeCompare(b.group)
        )
      : [];
  }, [game, sortBy]);

  return game ? (
    <>
      <MyAppBar />
      <Container maxWidth="md">
        <Typography pt={2} variant="h3" sx={{ flexGrow: 1 }}>
          Characters
        </Typography>
        <Grid
          pt={2}
          container
          direction={"row"}
          justifyContent={"end"}
          alignItems={"center"}
        >
          <Typography>Sort by:</Typography>
          {sortBy === "name" ? (
            <Button sx={{ color: "white" }} onClick={() => setSortBy("group")}>
              <PersonIcon />
            </Button>
          ) : (
            <Button sx={{ color: "white" }} onClick={() => setSortBy("name")}>
              <GroupsIcon />
            </Button>
          )}
        </Grid>
        <Grid pt={2} pb={2} container spacing={2}>
          {sorterCharacters.map((character, index) => (
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
  ) : (
    <Navigate to="/" />
  );
};
export default Characters;

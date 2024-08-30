import { Button, Container, Divider, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { GameContext } from "../GameContext";

const SelectAction = () => {
  const game = useContext(GameContext);
  return (
    <Container maxWidth="md">
      <Stack
        spacing={2}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        pt={4}
        pb={4}
      >
        <Typography variant="h3" aria-level={1} gutterBottom>
          Select Action
        </Typography>
        {game.supporters ? (
          <>
            <Button
              size="large"
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                game.firehouse();
              }}
            >
              Firehouse Action
            </Button>
            <Button
              size="large"
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                game.showHistory();
              }}
            >
              History
            </Button>
          </>
        ) : (
          <>
            <Button
              size="large"
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                game.showCharacters();
              }}
            >
              Characters
            </Button>
            <Divider />
            <Typography variant="h4" aria-level={2} gutterBottom>
              Murderer Only
            </Typography>

            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              onClick={() => {
                game.showPossibleSupporters();
              }}
            >
              Select Supporters
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              onClick={() => {
                game.showMotive();
              }}
            >
              Murderer Details
            </Button>
          </>
        )}
      </Stack>
    </Container>
  );
};

export default SelectAction;

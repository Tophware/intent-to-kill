import { Button, Container, Stack, Typography } from "@mui/material";
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
      </Stack>
    </Container>
  );
};

export default SelectAction;

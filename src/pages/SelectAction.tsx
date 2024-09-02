import { Button, Container, Divider, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useGameContext } from "../GameContext";
import { useGameActions } from "../hooks/useGameActions";

const SelectAction = () => {
  const { gameState: game } = useGameContext();
  const { quit } = useGameActions();

  return (
    <Container maxWidth="md">
      <Stack
        spacing={4}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        pt={4}
        pb={4}
      >
        <Typography variant="h3" aria-level={1} gutterBottom>
          Select Action
        </Typography>
        {game!.supporters ? (
          <>
            <Button
              component={Link}
              to="/firehouse"
              size="large"
              variant="contained"
              color="primary"
              fullWidth
            >
              Firehouse Action
            </Button>
            <Button
              component={Link}
              to="/history"
              size="large"
              variant="contained"
              color="primary"
              fullWidth
            >
              History
            </Button>
          </>
        ) : (
          <>
            <Button
              component={Link}
              to="/characters"
              size="large"
              variant="contained"
              color="primary"
              fullWidth
            >
              Characters
            </Button>
            <Divider />
            <Typography variant="h4" aria-level={2} gutterBottom>
              Murderer Only
            </Typography>

            <Button
              component={Link}
              to="/select-supporters"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
            >
              Select Supporters
            </Button>
            <Button
              component={Link}
              to="/murderer-details"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
            >
              Murderer Details
            </Button>
          </>
        )}

        <Divider />
        <Button
          component={Link}
          to="/statistics"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          Statistics
        </Button>
        <Divider />
        <Button
          onClick={quit}
          size="large"
          variant="contained"
          color="primary"
          fullWidth
        >
          Quit
        </Button>
      </Stack>
    </Container>
  );
};

export default SelectAction;

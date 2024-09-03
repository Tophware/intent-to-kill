import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { blue, green, red } from "@mui/material/colors";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useGameContext } from "../GameContext";
import { useGameActions } from "../hooks/useGameActions";

type GameProps = {
  isActive: boolean;
};

const MurdererStartingActions = ({ isActive }: GameProps) => {
  return (
    <Card elevation={1}>
      <CardHeader title="Murderer" sx={{ backgroundColor: red[900] }} />
      <CardContent sx={{ backgroundColor: red["A100"] }}>
        <Stack direction={"column"} spacing={2}>
          <Button
            component={Link}
            to="/murderer-details"
            variant="contained"
            fullWidth
            color="inherit"
            sx={{
              background: red[900],
            }}
          >
            Murderer Details
          </Button>
          {!isActive && (
            <Button
              component={Link}
              to="/select-supporters"
              variant="contained"
              fullWidth
              color="inherit"
              sx={{
                background: red[900],
              }}
            >
              Select Supporters
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

const GameActions = ({ isActive }: GameProps) => {
  return (
    <Card elevation={1}>
      <CardHeader title="Game Actions" sx={{ backgroundColor: green[900] }} />
      <CardContent sx={{ backgroundColor: green["A100"] }}>
        <Stack direction={"column"} spacing={2}>
          {isActive ? (
            <>
              <Button
                component={Link}
                to="/firehouse"
                variant="contained"
                fullWidth
                color="inherit"
                sx={{
                  background: green[900],
                }}
              >
                Firehouse
              </Button>
              <Button
                component={Link}
                to="/move-civilians"
                variant="contained"
                fullWidth
                color="inherit"
                sx={{
                  background: green[900],
                }}
              >
                Move Civilians
              </Button>
            </>
          ) : (
            <Typography variant="body1" sx={{ color: "black" }}>
              The Murderer must select supporters for Game Actions to become
              available.
            </Typography>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

const InformationActions = ({ isActive }: GameProps) => {
  return (
    <Card elevation={1}>
      <CardHeader title="Information" sx={{ backgroundColor: blue[900] }} />
      <CardContent sx={{ backgroundColor: blue["A100"] }}>
        <Stack direction={"column"} spacing={2}>
          <Button
            component={Link}
            to="/characters"
            variant="contained"
            fullWidth
            color="inherit"
            sx={{
              background: blue[900],
            }}
          >
            Characters
          </Button>
          <Button
            component={Link}
            to="/statistics"
            variant="contained"
            fullWidth
            color="inherit"
            sx={{
              background: blue[900],
            }}
          >
            Statistics
          </Button>
          {isActive && (
            <Button
              component={Link}
              to="/history"
              variant="contained"
              fullWidth
              color="inherit"
              sx={{
                background: blue[900],
              }}
            >
              History
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

const SelectAction = () => {
  const { gameState: game } = useGameContext();
  const { quit } = useGameActions();

  const isActive = useMemo(() => {
    return game && game.supporters ? true : false;
  }, [game]);

  return (
    <Container maxWidth="md">
      <Stack spacing={4} mt={2} direction={"column"}>
        <Typography variant="h3" aria-level={1} gutterBottom>
          Actions
        </Typography>
        <GameActions isActive={isActive} />
        <InformationActions isActive={isActive} />
        <MurdererStartingActions isActive={isActive} />
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

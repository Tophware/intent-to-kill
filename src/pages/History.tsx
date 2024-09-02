import {
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { Logo } from "../components/SocialGroupLogos";
import { useGameContext } from "../GameContext";

const History: React.FC = () => {
  const { gameState: game } = useGameContext();

  return game && game.history ? (
    <Container maxWidth="md">
      <Typography pt={2} variant="h3" aria-level={1} gutterBottom>
        History
      </Typography>
      <Stack
        spacing={2}
        direction={"column-reverse"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        pt={2}
        pb={2}
      >
        {game.history.length ? (
          game.history.map((group, index) => (
            <Card key={`${group}-${index}`} sx={{ width: "100%" }}>
              <CardContent className={group.toLowerCase()}>
                <Stack
                  direction={"row"}
                  alignContent={"flex-start"}
                  alignItems={"center"}
                >
                  <Logo group={group} style={{ height: "40px" }} />
                  <Typography
                    gutterBottom
                    variant="h4"
                    aria-level={2}
                    component="div"
                  >
                    {group}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography>No history</Typography>
        )}
      </Stack>
      <Button
        component={Link}
        to="/"
        size="large"
        variant="contained"
        color="primary"
        fullWidth
      >
        Done
      </Button>
    </Container>
  ) : (
    <Navigate to="/" />
  );
};

export default History;

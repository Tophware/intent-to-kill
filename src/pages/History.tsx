import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

import { Navigate } from "react-router";
import { MyAppBar } from "../components/MyAppBar";
import { Logo } from "../components/SocialGroupLogos";
import { useGameContext } from "../GameContext";

const History: React.FC = () => {
  const { gameState: game } = useGameContext();

  return game && game.history ? (
    <>
      <MyAppBar />
      <Container maxWidth="md">
        <Typography pt={2} variant="h3" aria-level={1} gutterBottom>
          History
        </Typography>
        <Stack
          spacing={2}
          direction={"column-reverse"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          pb={2}
        >
          {game.history.length ? (
            game.history.map((group, index) => (
              <Box
                component={"div"}
                className={group.toLocaleLowerCase()}
                key={`${group}-${index}`}
                sx={{
                  width: "100%",
                  padding: "0.25rem",
                  borderRadius: "0.25rem",
                }}
              >
                <Stack
                  direction={"row"}
                  alignContent={"flex-start"}
                  alignItems={"center"}
                >
                  <Logo group={group} style={{ height: "40px" }} />
                  <Typography
                    ml={2}
                    variant="h4"
                    aria-level={2}
                    component="div"
                  >
                    {group}
                  </Typography>
                </Stack>
              </Box>
            ))
          ) : (
            <Typography>No history</Typography>
          )}
        </Stack>
      </Container>
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default History;

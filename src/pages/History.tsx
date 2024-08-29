import {
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { GameContext } from "../GameContext";
import { Logo } from "../components/SocialGroupLogos";

const History: React.FC = () => {
  const game = useContext(GameContext);

  return (
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
        {game.history?.map((group) => (
          <Card key={group} sx={{ width: "100%" }}>
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
        ))}
      </Stack>
      <Button
        size="large"
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => {
          game.showActionSelection();
        }}
      >
        Done
      </Button>
    </Container>
  );
};

export default History;

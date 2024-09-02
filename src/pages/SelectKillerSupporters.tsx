import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { Navigate } from "react-router";
import { MyAppBar } from "../components/MyAppBar";
import MyStack from "../components/MyStack";
import { Logo } from "../components/SocialGroupLogos";
import { useGameContext } from "../GameContext";
import { useGameActions } from "../hooks/useGameActions";

const SelectKillerSupporters = () => {
  const { gameState: game } = useGameContext();
  const { selectSupporters } = useGameActions();

  return game && !game.supporters ? (
    <>
      <MyAppBar />
      <MyStack>
        <Typography variant="h4" aria-level={1} gutterBottom>
          Select Supporters
        </Typography>
        {game.possibleSupporters?.map((group, index) => (
          <Button
            key={`${group}-${index}`}
            style={{ width: "100%" }}
            onClick={() => {
              selectSupporters(group);
            }}
          >
            <Card style={{ width: "100%" }}>
              <CardContent className={group.toLocaleLowerCase()}>
                <Stack
                  spacing={4}
                  direction={"row"}
                  className={group.toLocaleLowerCase()}
                >
                  <Logo group={group} style={{ width: "20vmin" }} />
                  <Box>
                    <Typography variant="h6" aria-level={2}>
                      {group} ({game.statistics![group]})
                    </Typography>
                    {(game.murderer?.group === group ||
                      game.personOfInterest?.group === group) && (
                      <>
                        <Typography
                          component={"p"}
                          variant="body1"
                          gutterBottom={false}
                        >
                          Includes:
                          <ul style={{ marginTop: "0px" }}>
                            {game.murderer?.group === group && (
                              <li>Murderer</li>
                            )}
                            {game.personOfInterest?.group === group && (
                              <li>Person of Interest</li>
                            )}
                          </ul>
                        </Typography>
                      </>
                    )}
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Button>
        ))}
      </MyStack>
    </>
  ) : (
    <Navigate to="/" />
  );
};
export default SelectKillerSupporters;

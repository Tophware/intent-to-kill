import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { GameContext } from "../GameContext";
import { MyAppBar } from "../components/MyAppBar";
import MyStack from "../components/MyStack";
import { Logo } from "../components/SocialGroupLogos";

const SelectKillerSupporters = () => {
  const game = useContext(GameContext);

  return (
    <>
      <MyAppBar />
      <MyStack>
        <Typography variant="h4" aria-level={1} gutterBottom>
          Select Supporters
        </Typography>
        {game.possibleSupporters?.map((group) => (
          <Button
            style={{ width: "100%" }}
            onClick={() => {
              game.selectSupporters(group);
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
                              <li>Murderer</li>
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
  );
};
export default SelectKillerSupporters;

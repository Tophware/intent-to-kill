import {
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { GameContext } from "../GameContext";
import { Logo } from "../components/SocialGroupLogos";

import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import { Gender } from "../types";

const Characteristic = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ShowCharacters = () => {
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
          Characters
        </Typography>
        {game.characters?.map((character) => (
          <Card
            key={character.name}
            sx={{ width: "100%" }}
            className={character.group.toLowerCase()}
          >
            <CardContent className={character.group.toLowerCase()}>
              <Typography
                gutterBottom
                variant="h4"
                aria-level={2}
                component="div"
              >
                {character.name}
              </Typography>
              <Stack
                direction={"row"}
                alignContent={"flex-start"}
                alignItems={"center"}
              >
                <Logo
                  group={character.group}
                  style={{
                    height: "30px",
                  }}
                />
                <Typography pl={1} variant="h6" color="text.primary">
                  {character.group}
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-around"}
                alignItems={"start"}
              >
                <Characteristic>
                  {character.gender === Gender.Male ? (
                    <MaleIcon
                      sx={{
                        border: "2px solid lightblue",
                        borderRadius: "50%",
                        backgroundColor: "lightblue",
                        color: "black",
                      }}
                    />
                  ) : (
                    <FemaleIcon
                      sx={{
                        border: "2px solid lightpink",
                        borderRadius: "50%",
                        backgroundColor: "lightpink",
                        color: "black",
                      }}
                    />
                  )}
                </Characteristic>
                <Characteristic style={{ color: "dark" }}>
                  {character.age}
                </Characteristic>
                <Characteristic>{character.build}</Characteristic>
                <Characteristic>{character.height}</Characteristic>
              </Stack>
            </CardContent>
          </Card>
        ))}
        <Button
          size="large"
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => {
            game.showMotive();
          }}
        >
          Show Motive
        </Button>
      </Stack>
    </Container>
  );
};
export default ShowCharacters;

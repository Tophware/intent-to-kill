import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import {
  Card,
  CardContent,
  CardHeader,
  Stack,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Character, Gender } from "../types";
import { Logo } from "./SocialGroupLogos";

const Characteristic = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

type CharacterCardProps = {
  character: Character;
  onClick?: () => void;
};

export const CharacterCard = ({ character, onClick }: CharacterCardProps) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Card
      key={character.name}
      className={character.group.toLowerCase()}
      onClick={onClick}
      sx={{ width: "100%", height: "100%" }}
    >
      <CardHeader
        title={character.name}
        className={character.group.toLowerCase()}
      />
      <CardContent className={character.group.toLowerCase()}>
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
          <Characteristic>
            {isSmallScreen ? character.build.charAt(0) : character.build}
          </Characteristic>
          <Characteristic>
            {isSmallScreen ? character.height.charAt(0) : character.height}
          </Characteristic>
        </Stack>
      </CardContent>
    </Card>
  );
};

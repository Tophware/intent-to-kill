import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import {
  Card,
  CardContent,
  CardHeader,
  Stack,
  styled,
  useMediaQuery,
} from "@mui/material";
import { Character, Gender } from "../types";
import { Logo } from "./SocialGroupLogos";

const Characteristic = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  fontSize: "2rem",
}));

type CharacterCardProps = {
  character: Character;
  onClick?: () => void;
};

export const CharacterCard = ({ character, onClick }: CharacterCardProps) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return character ? (
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
          justifyContent={"space-around"}
          alignItems={"start"}
        >
          <Characteristic>
            <Logo
              group={character.group}
              style={{
                height: "3rem",
              }}
            />
          </Characteristic>
          <Characteristic>
            {character.gender === Gender.Male ? (
              <MaleIcon
                className="male"
                sx={{
                  borderRadius: "50%",
                  border: "2px solid",
                  height: "2rem",
                  width: "2rem",
                }}
              />
            ) : (
              <FemaleIcon
                className="female"
                sx={{
                  border: "2px solid",
                  borderRadius: "50%",
                  width: "2rem",
                  height: "2rem",
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
  ) : null;
};

import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { GameContext } from "../GameContext";
import { CharacterCard } from "../components/CharacterCard";
import { MyAppBar } from "../components/MyAppBar";

const MurdererCardContent = styled(CardContent)(({ theme }) => ({
  backgroundColor: "#f3eee9",
  color: theme.palette.getContrastText("#f3eee9"),
}));

const MurdererCardHeader = styled(CardHeader)(({ theme }) => ({
  backgroundColor: "#d7bea6",
  color: theme.palette.getContrastText("#d7bea6"),
}));

const MurdererDetails = () => {
  const game = useContext(GameContext);
  return (
    <>
      <MyAppBar />
      <Container maxWidth="md">
        <Stack spacing={4}>
          <Typography variant="h3" aria-level={1} gutterBottom>
            Murderer
          </Typography>
          <Divider />
          <div>
            <Typography variant="h4" aria-level={2} gutterBottom>
              Motive
            </Typography>
            <Card>
              <MurdererCardHeader title={game.motive?.motive} />
              <MurdererCardContent>
                {game.motive?.description}
              </MurdererCardContent>
            </Card>
          </div>
          <div>
            <Typography variant="h4" aria-level={2} gutterBottom>
              Murderer
            </Typography>
            <CharacterCard character={game.murderer!} />
          </div>
          <div>
            <Typography variant="h4" aria-level={2} gutterBottom>
              Person of Interest
            </Typography>
            <CharacterCard character={game.personOfInterest!} />
          </div>
        </Stack>
      </Container>
    </>
  );
};
export default MurdererDetails;

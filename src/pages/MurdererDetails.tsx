import { Container, Stack, Typography } from "@mui/material";
import { CharacterCard } from "../components/CharacterCard";
import { MotiveCard } from "../components/MotiveCard";
import { MyAppBar } from "../components/MyAppBar";
import SocialGroupCard from "../components/SocialGroupCard";
import { useGameContext } from "../GameContext";

const MurdererDetails = () => {
  const { gameState: game } = useGameContext();

  return game && game.motive ? (
    <>
      <MyAppBar />
      <Container maxWidth="md">
        <Stack spacing={4} pb={2} pt={2}>
          <Typography variant="h3" aria-level={1} gutterBottom>
            Murderer
          </Typography>
          <div>
            <CharacterCard character={game.murderer!} />
          </div>
          <div>
            <Typography variant="h4" aria-level={2} gutterBottom>
              Motive
            </Typography>
            <MotiveCard motive={game.motive} />
          </div>

          <div>
            <Typography variant="h4" aria-level={2} gutterBottom>
              Person of Interest
            </Typography>
            <CharacterCard character={game.personOfInterest!} />
          </div>
          <div>
            {game.supporters ? (
              <>
                <Typography variant="h4" aria-level={2} gutterBottom>
                  Supporters
                </Typography>
                <SocialGroupCard group={game.supporters!} />
              </>
            ) : (
              <>
                <Typography variant="h4" aria-level={2} gutterBottom>
                  Possible Supporters
                </Typography>
                <Stack spacing={2}>
                  {game.possibleSupporters?.map((group) => (
                    <SocialGroupCard key={group} group={group} />
                  ))}
                </Stack>
              </>
            )}
          </div>
        </Stack>
      </Container>
    </>
  ) : null;
};
export default MurdererDetails;

import { Button, Typography } from "@mui/material";
import MyStack from "../components/MyStack";
import { useGameContext } from "../GameContext";

const ShowMotive = () => {
  const { gameState: game } = useGameContext();

  return (
    <MyStack>
      <Typography variant="h3" aria-level={1} gutterBottom>
        Motive
      </Typography>
      <div>
        <Typography variant="h4" aria-level={2} align="center">
          {game.motive?.motive}
        </Typography>
        <Typography variant="body1" align="center">
          {game.motive?.description}
        </Typography>
      </div>
      <Button
        variant="outlined"
        color="primary"
        size="large"
        onClick={() => {
          // Show supporters
        }}
      >
        Select Killer Supporters
      </Button>
    </MyStack>
  );
};
export default ShowMotive;

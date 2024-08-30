import WarningTwoToneIcon from "@mui/icons-material/WarningTwoTone";
import { Button, Container, Stack, Typography, styled } from "@mui/material";
import { useContext } from "react";
import { GameContext } from "../GameContext";

const WarningStack = styled(Stack)({
  height: "calc(100dvh - 60px)",
  padding: "2rem",
});

const WarningContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.warning.light,
  color: theme.palette.warning.contrastText,
}));

const Warning = () => {
  const game = useContext(GameContext);
  return (
    <WarningContainer maxWidth="md">
      <WarningStack spacing={2} alignItems={"center"}>
        <Typography variant="h3" aria-level={1} gutterBottom>
          Warning
        </Typography>

        <WarningTwoToneIcon style={{ fontSize: "10rem" }} />
        <Typography variant="body1">{game.warningMessage}</Typography>
        <Button
          variant="contained"
          size="large"
          color="warning"
          onClick={() => {
            game.dismissWarning();
          }}
        >
          Continue
        </Button>
      </WarningStack>
    </WarningContainer>
  );
};

export default Warning;

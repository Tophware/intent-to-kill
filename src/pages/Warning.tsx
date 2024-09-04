import WarningTwoToneIcon from "@mui/icons-material/WarningTwoTone";
import { Button, Container, Stack, Typography, styled } from "@mui/material";
import { Link, useParams } from "react-router-dom";

const WarningStack = styled(Stack)({
  height: "100dvh",
  padding: "2rem",
});

const WarningContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.warning.light,
  color: theme.palette.warning.contrastText,
}));

const Warning = () => {
  const { p } = useParams();
  console.log(p);

  return (
    <WarningContainer maxWidth="md">
      <WarningStack spacing={2} alignItems={"center"}>
        <Typography variant="h2" aria-level={1} gutterBottom>
          Warning
        </Typography>

        <WarningTwoToneIcon style={{ fontSize: "10rem" }} />
        <Typography variant="h3">Murderer Only!</Typography>
        <Typography variant="body1">
          The following screen contains spoilers and should only be viewed by
          the Murderer.
        </Typography>
        <Button
          component={Link}
          to={`/${p}`}
          variant="contained"
          size="large"
          color="warning"
        >
          Continue
        </Button>
        <Button
          component={Link}
          to="/"
          variant="contained"
          size="large"
          color="inherit"
        >
          Back
        </Button>
      </WarningStack>
    </WarningContainer>
  );
};

export default Warning;

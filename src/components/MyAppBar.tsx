import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  disabled?: boolean;
};

export const MyAppBar = ({ disabled = false }: Props) => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Button disabled={disabled} component={Link} to="/" color="inherit">
            Back
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

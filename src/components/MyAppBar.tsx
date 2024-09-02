import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

export const MyAppBar = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Button component={Link} to="/" color="inherit">
            Back
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

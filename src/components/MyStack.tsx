import { Container, Stack } from "@mui/material";

type Props = {
  children?: React.ReactNode;
};

const MyStack = ({ children }: Props) => {
  return (
    <Container maxWidth="md">
      <Stack
        spacing={2}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        sx={{ height: "100vh" }}
      >
        {children}
      </Stack>
    </Container>
  );
};

export default MyStack;

import { Property } from "csstype";
import { StyledContainer, StyledStack } from "./StyledContainer";

type Props = {
  children?: React.ReactNode;
  justifyContent?: Property.JustifyContent;
};

const MyStack = ({ children, justifyContent }: Props) => {
  return (
    <StyledContainer maxWidth="md">
      <StyledStack
        spacing={2}
        direction={"column"}
        alignItems={"center"}
        justifyContent={justifyContent}
        sx={{ height: "calc(100dvh - 60px)" }}
      >
        {children}
      </StyledStack>
    </StyledContainer>
  );
};

export default MyStack;

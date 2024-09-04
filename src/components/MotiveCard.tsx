import {
  Card,
  CardContent,
  CardHeader,
  styled,
  Typography,
} from "@mui/material";
import { Motive } from "../types";

type MotiveCardProps = {
  motive: Motive;
};

const MotiveCardContent = styled(CardContent)(({ theme }) => ({
  backgroundColor: "#f3eee9",
  color: theme.palette.getContrastText("#f3eee9"),
}));

const MotiveCardHeader = styled(CardHeader)(({ theme }) => ({
  backgroundColor: "#d7bea6",
  color: theme.palette.getContrastText("#d7bea6"),
}));

export const MotiveCard = ({ motive }: MotiveCardProps) => {
  return (
    <Card>
      <MotiveCardHeader title={motive.name.toString()} />
      <MotiveCardContent>
        <Typography variant="body1">{motive.description}</Typography>
      </MotiveCardContent>
    </Card>
  );
};

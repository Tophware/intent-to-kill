import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { Navigate } from "react-router";
import { MyAppBar } from "../components/MyAppBar";
import { useGameContext } from "../GameContext";

const Statistics = () => {
  const { gameState: game } = useGameContext();
  return game && game.statistics ? (
    <>
      <MyAppBar />
      <Container maxWidth="md">
        <Stack spacing={4}>
          <Typography variant="h3" aria-level={1} gutterBottom>
            Statistics
          </Typography>
          <Card>
            <CardHeader title={"Social Group"} />
            <CardContent>
              <div>Authority: {game.statistics.Authority}</div>
              <div>Criminals: {game.statistics.Criminals}</div>
              <div>Government: {game.statistics.Government}</div>
              <div>Immigrants: {game.statistics.Immigrants}</div>
              <div>Jet Set: {game.statistics.JetSet}</div>
              <div>Labor: {game.statistics.Labor}</div>
              <div>Medicine: {game.statistics.Medicine}</div>
              <div>Outcasts: {game.statistics.Outcasts}</div>
              <div>Press: {game.statistics.Press}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader title={"Gender"} />
            <CardContent>
              <div>Male: {game.statistics.Male}</div>
              <div>Female: {game.statistics.Female}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader title={"Age"} />
            <CardContent>
              <div>20: {game.statistics["20"]}</div>
              <div>40: {game.statistics["40"]}</div>
              <div>60: {game.statistics["60"]}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader title={"Build"} />
            <CardContent>
              <div>Small: {game.statistics.Small}</div>
              <div>Medium: {game.statistics.Medium}</div>
              <div>Large: {game.statistics.Large}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader title={"Height"} />
            <CardContent>
              <div>Short: {game.statistics.Short}</div>
              <div>Average: {game.statistics.Average}</div>
              <div>Tall: {game.statistics.Tall}</div>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </>
  ) : (
    <Navigate to="/" />
  );
};
export default Statistics;

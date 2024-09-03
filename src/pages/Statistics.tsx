import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid2 as Grid,
  Grid2Props,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { blue, blueGrey, green, red } from "@mui/material/colors";
import { ReactNode, useMemo } from "react";
import { Navigate } from "react-router";
import { MyAppBar } from "../components/MyAppBar";
import { Logo } from "../components/SocialGroupLogos";
import { useGameContext } from "../GameContext";
import { SocialGroup } from "../types";

const StyledStatisticsItem = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(0.25),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  borderRadius: "4px",
}));

type StatisticsItemProps = Grid2Props & {
  label: string;
  value: any;
  icon?: ReactNode;
};

const colors = [green, blue, red];

const StatisticsItem = (props: StatisticsItemProps) => {
  const { label, value, icon } = props;
  return (
    <StyledStatisticsItem {...props}>
      <Box sx={{ display: "flex" }}>
        {icon ?? null}
        <Typography ml={1} sx={{ flexGrow: 1 }}>
          {label}
        </Typography>
        <Typography>{value}</Typography>
      </Box>
    </StyledStatisticsItem>
  );
};

const SocialGroupStatistic = ({
  group,
  count,
}: {
  group: SocialGroup;
  count: number;
}) => {
  return (
    <StatisticsItem
      className={group.toLocaleLowerCase()}
      icon={<Logo style={{ height: "20px" }} group={group} />}
      label={group}
      value={count.toString()}
    />
  );
};

const Statistics = () => {
  const { gameState: game } = useGameContext();

  const socialGroupStaticstics = useMemo(() => {
    return game?.statistics
      ? [
          {
            group: SocialGroup.Authority,
            count: game.statistics.Authority,
          },
          {
            group: SocialGroup.Criminals,
            count: game.statistics.Criminals,
          },
          {
            group: SocialGroup.Government,
            count: game.statistics.Government,
          },
          {
            group: SocialGroup.Immigrants,
            count: game.statistics.Immigrants,
          },
          {
            group: SocialGroup.JetSet,
            count: game.statistics.JetSet,
          },
          {
            group: SocialGroup.Labor,
            count: game.statistics.Labor,
          },
          {
            group: SocialGroup.Medicine,
            count: game.statistics.Medicine,
          },
          {
            group: SocialGroup.Outcasts,
            count: game.statistics.Outcasts,
          },
          {
            group: SocialGroup.Press,
            count: game.statistics.Press,
          },
        ]
      : [];
  }, [game]);

  return game && game.statistics ? (
    <>
      <MyAppBar />
      <Container maxWidth="md">
        <Stack mt={2} mb={2} spacing={2}>
          <Typography variant="h3" aria-level={1} gutterBottom>
            Statistics
          </Typography>
          <Card elevation={1}>
            <CardHeader title={"Social Groups"} />
            <CardContent>
              <Grid container spacing={2}>
                <Grid container size={6} direction={"column"} spacing={2}>
                  {socialGroupStaticstics.slice(0, 5).map((stat) => (
                    <SocialGroupStatistic
                      key={stat.group}
                      group={stat.group}
                      count={stat.count}
                    />
                  ))}
                </Grid>
                <Grid container size={6} direction={"column"} spacing={2}>
                  {socialGroupStaticstics.slice(5, 9).map((stat) => (
                    <SocialGroupStatistic
                      key={stat.group}
                      group={stat.group}
                      count={stat.count}
                    />
                  ))}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card elevation={2}>
            <CardHeader title={"Gender"} />
            <CardContent>
              <Grid container spacing={2}>
                <StatisticsItem
                  className="male"
                  size={6}
                  icon={<MaleIcon />}
                  label="Male"
                  value={game.statistics.Male}
                />
                <StatisticsItem
                  className="female"
                  size={6}
                  icon={<FemaleIcon />}
                  label="Female"
                  value={game.statistics.Female}
                />
              </Grid>
            </CardContent>
          </Card>
          <Card elevation={3}>
            <CardHeader title={"Age"} />
            <CardContent>
              <Grid container spacing={2}>
                {[20, 40, 60].map((age, index) => (
                  <StatisticsItem
                    sx={{
                      backgroundColor:
                        blueGrey[(index * 200 + 500) as keyof typeof blueGrey],
                    }}
                    key={age}
                    size={4}
                    label={age.toString()}
                    value={game.statistics![age.toString()]}
                  />
                ))}
              </Grid>
            </CardContent>
          </Card>
          <Card elevation={4}>
            <CardHeader title={"Build"} />
            <CardContent>
              <Grid container spacing={2}>
                {["Small", "Medium", "Large"].map((build, index) => (
                  <StatisticsItem
                    sx={{
                      backgroundColor: colors[index][700],
                    }}
                    key={build}
                    size={4}
                    label={build.toString()}
                    value={game.statistics![build.toString()]}
                  />
                ))}
              </Grid>
            </CardContent>
          </Card>
          <Card elevation={5}>
            <CardHeader title={"Height"} />
            <CardContent>
              <Grid container spacing={2}>
                {["Short", "Average", "Tall"].map((height, index) => (
                  <StatisticsItem
                    sx={{
                      backgroundColor: colors[index][900],
                    }}
                    key={height}
                    size={4}
                    label={height.toString()}
                    value={game.statistics![height.toString()]}
                  />
                ))}
              </Grid>
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

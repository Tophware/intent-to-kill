import { Card, CardContent, Stack, Typography } from "@mui/material";
import { SocialGroup } from "../types";
import { Logo } from "./SocialGroupLogos";

type Props = {
  group: SocialGroup;
};
const SocialGroupCard = ({ group }: Props) => (
  <Card sx={{ borderRadius: "5px" }}>
    <CardContent className={group.toLocaleLowerCase()}>
      <Stack direction="row" spacing={2} alignItems={"center"}>
        <Logo style={{ width: "3rem" }} group={group} />
        <Typography variant="h5">{group}</Typography>
      </Stack>
    </CardContent>
  </Card>
);

export default SocialGroupCard;

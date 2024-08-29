import { Stack, Typography } from "@mui/material";
import { SocialGroup } from "../types";
import { Logo } from "./SocialGroupLogos";

type Props = {
  group: SocialGroup;
};
const SocialGroupCard = ({ group }: Props) => (
  <Stack>
    <Logo group={group} style={{ width: "40vmin" }} />
    <Typography variant="h6" aria-level={2} align="center">
      {group.toLocaleUpperCase()}
    </Typography>
  </Stack>
);

export default SocialGroupCard;

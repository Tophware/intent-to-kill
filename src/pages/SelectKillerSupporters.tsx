import { Typography } from "@mui/material";
import { useContext } from "react";
import { GameContext } from "../GameContext";
import { MyAppBar } from "../components/MyAppBar";
import MyStack from "../components/MyStack";
import { Logo } from "../components/SocialGroupLogos";

const SelectKillerSupporters = () => {
  const game = useContext(GameContext);

  return (
    <>
      <MyAppBar />
      <MyStack>
        <Typography variant="h3" aria-level={1} gutterBottom>
          Select Supporters
        </Typography>
        {game.possibleSupporters?.map((group) => (
          <div
            key={group}
            role="button"
            onClick={() => {
              game.selectSupporters(group);
            }}
          >
            <Logo group={group} style={{ width: "40vmin" }} />
            <Typography variant="h6" aria-level={2} align="center">
              {group}
            </Typography>
          </div>
        ))}
      </MyStack>
    </>
  );
};
export default SelectKillerSupporters;

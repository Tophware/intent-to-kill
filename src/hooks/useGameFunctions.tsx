import { MotiveCard, SocialGroup } from "../types";
import { useCharacters } from "./useCharacters";
import useUtils from "./useUtils";

export const allSocialGroups = () => {
  return [
    SocialGroup.Authority,
    SocialGroup.Criminals,
    SocialGroup.Government,
    SocialGroup.Immigrants,
    SocialGroup.JetSet,
    SocialGroup.Labor,
    SocialGroup.Medicine,
    SocialGroup.Outcasts,
    SocialGroup.Press,
  ];
};

const getCharacters = (count: number) => {
  const characters = useCharacters();
  return characters.sort(() => Math.random() - 0.5).slice(0, count);
};

const getSupporters = (count: number) => {
  const socialGroups = allSocialGroups();
  return socialGroups.sort(() => Math.random() - 0.5).slice(0, count);
};

const getMotive = () => {
  const { getRandomEnum } = useUtils();
  return getRandomEnum(MotiveCard);
};

export const useGameFunctions = () => {
  return {
    getCharacters,
    getSupporters,
    getMotive,
  };
};

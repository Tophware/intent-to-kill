import { SocialGroup } from "../types";
import { MotiveCard } from "../types/MotiveCard";
import { useCharacters } from "./useCharacters";

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
  let uniqueGroups = 0;
  let selectedCharacters;
  do {
    selectedCharacters = characters
      .sort(() => Math.random() - 0.5)
      .slice(0, count);
    uniqueGroups = [
      ...new Set(selectedCharacters.map((character) => character.group)),
    ].length;
  } while (uniqueGroups < 5);
  console.log(uniqueGroups);
  return selectedCharacters;
};

const getSupporters = (count: number) => {
  const socialGroups = allSocialGroups();
  return socialGroups.sort(() => Math.random() - 0.5).slice(0, count);
};

const getMotive = (collection: Array<MotiveCard>) => {
  const randomIndex = Math.floor(Math.random() * collection.length);
  return collection[randomIndex];
};

export const useGameFunctions = () => {
  return {
    getCharacters,
    getSupporters,
    getMotive,
  };
};

import { useGameContext } from "../GameContext";
import {
  Build,
  Character,
  Gender,
  Height,
  Motive,
  SocialGroup,
} from "../types";
import { useCharacters } from "./useCharacters";
import { useMotives } from "./useMotives";
import useUtils from "./useUtils";

const calculateStatistics = (characters: Array<Character>) => {
  let statistics: { [key: string | number]: number } = {};
  Object.keys(SocialGroup).forEach((group) => {
    statistics[group] = 0;
  });
  Object.keys(Gender).forEach((gender) => {
    statistics[gender] = 0;
  });
  Object.keys(Build).forEach((build) => {
    statistics[build] = 0;
  });
  Object.keys(Height).forEach((height) => {
    statistics[height] = 0;
  });
  [20, 40, 60].forEach((age) => {
    statistics[age] = 0;
  });
  characters.forEach((character) => {
    console.log(character);
    statistics[character.group]++;
    statistics[character.gender]++;
    statistics[character.build]++;
    statistics[character.height]++;
    statistics[character.age]++;
  });
  console.log(statistics);
  return statistics;
};

export const useGameActions = () => {
  const { dispatch } = useGameContext();
  const { randomSort } = useUtils();

  const { starterMotives, allMotives } = useMotives();

  const startGame = (starter: boolean = true) => {
    const { characters: allCharacters } = useCharacters();

    // Get 20 random characters
    let characters: Character[] = [...allCharacters]
      .sort(randomSort)
      .slice(0, 20);

    console.log(characters);
    // Identify the Murderer and Person of Interest
    let villains: Character[] = [...characters].sort(randomSort);

    let murderer: Character = villains.splice(
      Math.floor(Math.random() * villains.length - 1),
      1
    )[0];

    let personOfInterest: Character = villains.splice(
      Math.floor(Math.random() * villains.length - 1),
      1
    )[0];

    // Get 3 random social groups
    let socialGroups = Object.values(SocialGroup).sort(randomSort);
    let possibleSupporters = socialGroups.splice(0, 3);

    // Get possible motives
    let motives = starter
      ? [...starterMotives]
      : [...allMotives].sort(randomSort).slice(0, 6);

    // Select a random Motive from base motives
    let motive: Motive = motives.sort(randomSort)[0];

    // get statistics
    let statistics = calculateStatistics(characters);

    dispatch({
      type: "START",
      payload: {
        characters,
        murderer,
        personOfInterest,
        socialGroups,
        possibleSupporters,
        motive,
        motives,
        history: [],
        statistics,
      },
    });
  };

  const selectSupporters = (supporters: SocialGroup) => {
    dispatch({ type: "SELECT_SUPPORTERS", payload: supporters });
  };

  const firehouse = () => {
    dispatch({ type: "FIREHOUSE" });
  };

  const moveCivilians = () => {
    dispatch({ type: "MOVE_CIVILIANS" });
  };

  const quit = () => {
    dispatch({ type: "QUIT" });
  };

  return {
    startGame,
    selectSupporters,
    moveCivilians,
    firehouse,
    quit,
  };
};

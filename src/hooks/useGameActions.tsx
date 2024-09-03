import { useGameContext } from "../GameContext";
import { Build, Character, Gender, Height, SocialGroup } from "../types";
import { MotiveCard } from "../types/MotiveCard";
import { useCharacters } from "./useCharacters";
import { useMotives } from "./useMotives";

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

  const { starterMotives } = useMotives();

  const startGame = () => {
    const { characters: allCharacters } = useCharacters();

    // Get 20 random characters
    let characters: Character[] = [...allCharacters]
      .sort(() => 0.5 - Math.random())
      .slice(0, 20);

    console.log(characters);
    // Identify the Murderer and Person of Interest
    let villains: Character[] = [...characters].sort(() => 0.5 - Math.random());

    let murderer: Character = villains.splice(
      Math.floor(Math.random() * villains.length - 1),
      1
    )[0];

    let personOfInterest: Character = villains.splice(
      Math.floor(Math.random() * villains.length - 1),
      1
    )[0];

    // Get 3 random social groups
    let socialGroups = Object.values(SocialGroup).sort(
      () => 0.5 - Math.random()
    );
    let possibleSupporters = socialGroups.splice(0, 3);

    // Select a random Motive from base motives
    let motive: MotiveCard = starterMotives.sort(() => 0.5 - Math.random())[0];

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

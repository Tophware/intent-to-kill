import { Motive, MotiveName } from "../types";

const allMotives: Array<Motive> = [
  {
    name: MotiveName.Killer,
    description: "You can only kill civilians who are alone in a block.",
  },
  {
    name: MotiveName.Cutthroat,
    description:
      "You cannot murder in the four (4) central blocks of the city.",
  },
  {
    name: MotiveName.Maniac,
    description: "All victims must be of the same sex.",
  },
  {
    name: MotiveName.Sadist,
    description: "You cannot murder intimidated civilians.",
  },
  {
    name: MotiveName.Vigilante,
    description:
      "You cannot murder anyone in the eight (8) blocks surrounding the Detective marker.",
  },
  {
    name: MotiveName.Terrorist,
    description: "All victims must be from different social groups",
  },
  {
    name: MotiveName.Cultist,
    description:
      "The first victim has to be of a different social group than the Person of Interest. Each victim has to be from a different social group than the last. Has to murder the Person of Interest.",
  },
  {
    name: MotiveName.Robber,
    description:
      "You cannot murder anyone in any block adjacent to the last crime scene.",
  },
  {
    name: MotiveName.Cannibal,
    description:
      "There have to be civilians of all three different builds among the victims",
  },
  {
    name: MotiveName.Radical,
    description: "At least 3 victims have to be from the same social group.",
  },
  {
    name: MotiveName.Psychopath,
    description: "All victims can be of no more than two different ages.",
  },
  {
    name: MotiveName.Spy,
    description: "All victims have to be murdered in blocks with buildings.",
  },
];

const getMotive = (name: MotiveName) => {
  return allMotives.find((motive) => motive.name === name);
};

const starterMotives = allMotives.slice(0, 6);

export const useMotives = () => ({
  allMotives,
  starterMotives,
  getMotive,
});

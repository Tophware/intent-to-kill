import { Motive } from "../types";
import { MotiveCard } from "../types/MotiveCard";

const allMotives: Array<MotiveCard> = [
  {
    motive: Motive.Killer,
    description: "You can only kill civilians who are alone in a block.",
  },
  {
    motive: Motive.Cutthroat,
    description:
      "You cannot murder in the four (4) central blocks of the city.",
  },
  {
    motive: Motive.Maniac,
    description: "All victims must be of the same sex.",
  },
  {
    motive: Motive.Sadist,
    description: "You cannot murder intimidated civilians.",
  },
  {
    motive: Motive.Vigilante,
    description:
      "You cannot murder anyone in the eight (8) blocks surrounding the Detective marker.",
  },
  {
    motive: Motive.Terrorist,
    description: "All victims must be from different social groups",
  },
  {
    motive: Motive.Cultist,
    description:
      "The first victim has to be of a different social group than the Person of Interest. Each victim has to be from a different social group than the last. Has to murder the Person of Interest.",
  },
  {
    motive: Motive.Robber,
    description:
      "You cannot murder anyone in any block adjacent to the last crime scene.",
  },
  {
    motive: Motive.Cannibal,
    description:
      "There have to be civilians of all three different builds among the victims",
  },
  {
    motive: Motive.Radical,
    description: "At least 3 victims have to be from the same social group.",
  },
  {
    motive: Motive.Psychopath,
    description: "All victims can be of no more than two different ages.",
  },
  {
    motive: Motive.Spy,
    description: "All victims have to be murdered in blocks with buildings.",
  },
];

const starterMotives = allMotives.slice(0, 6);

export const useMotives = () => ({
  allMotives,
  starterMotives,
});

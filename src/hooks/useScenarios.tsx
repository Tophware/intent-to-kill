import { CharacterName, MotiveName } from "../types";

type Scenario = {
  name: string;
  detective?: CharacterName;
  motives: Array<MotiveName>;
};

const scenarios: Array<Scenario> = [
  {
    name: "T-Men",
    detective: "Secret agent",
    motives: [
      MotiveName.Spy,
      MotiveName.Cutthroat,
      MotiveName.Psychopath,
      MotiveName.Vigilante,
      MotiveName.Terrorist,
      MotiveName.Sadist,
    ],
  },
  {
    name: "On Dangerous Ground",
    detective: "Patrolman",
    motives: [
      MotiveName.Spy,
      MotiveName.Cutthroat,
      MotiveName.Psychopath,
      MotiveName.Vigilante,
      MotiveName.Terrorist,
      MotiveName.Sadist,
    ],
  },
  {
    name: "Touch of Evil",
    detective: "State Attorney",
    motives: [
      MotiveName.Spy,
      MotiveName.Sadist,
      MotiveName.Cutthroat,
      MotiveName.Maniac,
      MotiveName.Radical,
      MotiveName.Psychopath,
    ],
  },
  {
    name: "D.O.A",
    detective: "Benefactor",
    motives: [
      MotiveName.Spy,
      MotiveName.Sadist,
      MotiveName.Radical,
      MotiveName.Maniac,
      MotiveName.Cannibal,
      MotiveName.Robber,
    ],
  },
  {
    name: "Panic in the Streets",
    detective: "Surgeon",
    motives: [
      MotiveName.Robber,
      MotiveName.Spy,
      MotiveName.Psychopath,
      MotiveName.Sadist,
      MotiveName.Vigilante,
      MotiveName.Cultist,
    ],
  },
  {
    name: "The Street With No Name",
    detective: undefined,
    motives: [
      MotiveName.Robber,
      MotiveName.Spy,
      MotiveName.Psychopath,
      MotiveName.Sadist,
      MotiveName.Vigilante,
      MotiveName.Cultist,
    ],
  },
  {
    name: "Stranger on the Third Floor",
    detective: "Riveter",
    motives: [
      MotiveName.Killer,
      MotiveName.Robber,
      MotiveName.Radical,
      MotiveName.Vigilante,
      MotiveName.Terrorist,
      MotiveName.Maniac,
    ],
  },
  {
    name: "Split Second",
    detective: "Veteran",
    motives: [
      MotiveName.Cutthroat,
      MotiveName.Cannibal,
      MotiveName.Terrorist,
      MotiveName.Maniac,
      MotiveName.Sadist,
      MotiveName.Killer,
    ],
  },
];

const getScenario = (name: string) => {
  return scenarios.find((scenario) => scenario.name === name);
};

export const useScenarios = () => {
  return { scenarios, getScenario };
};

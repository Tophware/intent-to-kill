import { CharacterName, Motive } from "../types";

type Scenario = {
  name: string;
  detective?: CharacterName;
  motives: Array<Motive>;
};

const scenarios: Array<Scenario> = [
  {
    name: "T-Men",
    detective: "Secret agent",
    motives: [
      Motive.Spy,
      Motive.Cutthroat,
      Motive.Psychopath,
      Motive.Vigilante,
      Motive.Terrorist,
      Motive.Sadist,
    ],
  },
  {
    name: "On Dangerous Ground",
    detective: "Patrolman",
    motives: [
      Motive.Spy,
      Motive.Cutthroat,
      Motive.Psychopath,
      Motive.Vigilante,
      Motive.Terrorist,
      Motive.Sadist,
    ],
  },
  {
    name: "Touch of Evil",
    detective: "State Attorney",
    motives: [
      Motive.Spy,
      Motive.Sadist,
      Motive.Cutthroat,
      Motive.Maniac,
      Motive.Radical,
      Motive.Psychopath,
    ],
  },
  {
    name: "D.O.A",
    detective: "Benefactor",
    motives: [
      Motive.Spy,
      Motive.Sadist,
      Motive.Radical,
      Motive.Maniac,
      Motive.Cannibal,
      Motive.Robber,
    ],
  },
  {
    name: "Panic in the Streets",
    detective: "Surgeon",
    motives: [
      Motive.Robber,
      Motive.Spy,
      Motive.Psychopath,
      Motive.Sadist,
      Motive.Vigilante,
      Motive.Cultist,
    ],
  },
  {
    name: "The Street With No Name",
    detective: undefined,
    motives: [
      Motive.Robber,
      Motive.Spy,
      Motive.Psychopath,
      Motive.Sadist,
      Motive.Vigilante,
      Motive.Cultist,
    ],
  },
  {
    name: "Stranger on the Third Floor",
    detective: "Riveter",
    motives: [
      Motive.Killer,
      Motive.Robber,
      Motive.Radical,
      Motive.Vigilante,
      Motive.Terrorist,
      Motive.Maniac,
    ],
  },
  {
    name: "Split Second",
    detective: "Veteran",
    motives: [
      Motive.Cutthroat,
      Motive.Cannibal,
      Motive.Terrorist,
      Motive.Maniac,
      Motive.Sadist,
      Motive.Killer,
    ],
  },
];

const getScenario = (name: string) => {
  return scenarios.find((scenario) => scenario.name === name);
};

export const useScenarios = () => {
  return { scenarios, getScenario };
};

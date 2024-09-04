export enum MotiveName {
  Maniac = "Maniac",
  Sadist = "Sadist",
  Cutthroat = "Cutthroat",
  Vigilante = "Vigilante",
  Killer = "Killer",
  Terrorist = "Terrorist",
  Cultist = "Cultist",
  Robber = "Robber",
  Cannibal = "Cannibal",
  Radical = "Radical",
  Psychopath = "Psychopath",
  Spy = "Spy",
}

export type Motive = {
  name: MotiveName;
  description?: string;
};

import { Build } from "./Build";
import { Gender } from "./Gender";
import { Height } from "./Height";
import { SocialGroup } from "./SocialGroup";

export type CharacterName =
  | "Bartender"
  | "Fence"
  | "Informant"
  | "Bouncer"
  | "Gangster"
  | "Mafia Don"
  | "Bus Driver"
  | "Waitress"
  | "Riveter"
  | "Librarian"
  | "Ice Cream Man"
  | "Fireman"
  | "Musician"
  | "Nun"
  | "Psychic"
  | "Professor"
  | "Navy Sailor"
  | "Cabin Crew"
  | "Congressman"
  | "Secret agent"
  | "Mayor"
  | "Secretary"
  | "Ambassador"
  | "Lobbyist"
  | "Pharmacist"
  | "Veterinarian"
  | "Nurse"
  | "Surgeon"
  | "Orderly"
  | "Coroner"
  | "Judge"
  | "Patrolman"
  | "State Attorney"
  | "Deputy"
  | "Lawyer"
  | "Dispatcher"
  | "Beggar"
  | "Veteran"
  | "Greaser"
  | "War Widow"
  | "Cat Lady"
  | "Showgirl"
  | "Ballplayer"
  | "Benefactor"
  | "Restaurateur"
  | "Actress"
  | "Psychiatrist"
  | "Artist"
  | "Newscaster"
  | "Paperboy"
  | "Photographer"
  | "Reporter"
  | "Mailwoman"
  | "Editor";

export type Character = {
  name: CharacterName;
  group: SocialGroup;
  gender: Gender;
  age: number;
  build: Build;
  height: Height;
};

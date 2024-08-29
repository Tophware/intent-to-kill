import { Build } from "./Build";
import { Gender } from "./Gender";
import { Height } from "./Height";
import { SocialGroup } from "./SocialGroup";

export type Character = {
  name: string;
  group: SocialGroup;
  gender: Gender;
  age: number;
  build: Build;
  height: Height;
};

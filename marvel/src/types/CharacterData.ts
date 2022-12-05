import { Data } from "./Data";
import { Items } from "./Referense";

export interface CharacterData extends Data {
  name: string;
  comics: Items;
  series: Items;
}

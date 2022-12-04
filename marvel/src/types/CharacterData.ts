import { Data } from "./Data";
import { Items } from "./Referense";

export interface CharacterData extends Data {
  comics: Items;
  serie: Items;
}

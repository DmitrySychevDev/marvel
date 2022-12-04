import { Data } from "./Data";
import { Items } from "./Referense";

export interface ComicsData extends Data {
  characters: Items;
  serie: Items;
}

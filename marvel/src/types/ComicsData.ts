import { Data } from "./Data";
import { Items, Referense } from "./Referense";

export interface ComicsData extends Data {
  title: string;
  characters: Items;
  series: Referense | undefined;
}

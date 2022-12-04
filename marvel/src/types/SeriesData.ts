import { Data } from "./Data";
import { Items } from "./Referense";

export interface SeriesData extends Data {
  comics: Items;
  serie: Items;
}

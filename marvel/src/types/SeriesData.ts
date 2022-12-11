import { Data } from "./Data";
import { Items } from "./Referense";
import { ResponseData } from "./ResponseData";

export interface SeriesData extends Data {
  title: string;
  comics: Items;
  characters: Items;
}

interface SeriesResponseData extends ResponseData {
  results: SeriesData[];
}

export interface SeriesList {
  data: SeriesResponseData;
}

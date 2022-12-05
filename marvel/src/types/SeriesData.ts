import { Data } from "./Data";
import { Items } from "./Referense";
import { ResponseData } from "./ResponseData";

export interface SeriesData extends Data {
  comics: Items;
  serie: Items;
}

interface SeriesResponseData extends ResponseData {
  results: SeriesData[];
}

export interface SeriesList {
  data: SeriesResponseData;
}

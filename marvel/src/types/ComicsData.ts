import { Data } from './Data';
import { Items, Referense } from './Referense';
import { ResponseData } from './ResponseData';

export interface ComicsData extends Data {
  title: string;
  characters: Items;
  series: Referense | undefined;
}

interface ComisResponseData extends ResponseData {
  results: ComicsData[];
}

export interface ComicsList {
  data: ComisResponseData;
}

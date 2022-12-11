import { Data } from './Data';
import { Items } from './Referense';
import { ResponseData } from './ResponseData';

export interface CharacterData extends Data {
  name: string;
  comics: Items;
  series: Items;
}

interface CharactersResponseData extends ResponseData {
  results: CharacterData[];
}

export interface CharactersList {
  data: CharactersResponseData;
}

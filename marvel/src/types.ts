export interface Data {
  id: string;
  picture: string;
  title: string;
  description: string;
}

export interface Characters extends Data {
  series: string[];
  comics: string[];
}

export interface Comics extends Data {
  characters: string[];
  series: string[];
}

export interface Series extends Data {
  characters: string[];
  comics: string[];
}

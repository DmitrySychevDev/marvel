interface Thumbnail {
  path: string;
  extension: string;
}

export interface Data {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  resourceURI: string;
}

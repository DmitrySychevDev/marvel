interface Thumbnail {
  path: string;
  extension: string;
}

export interface Data {
  id: number;
  description: string;
  thumbnail: Thumbnail;
  resourceURI: string;
}

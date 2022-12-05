import axios from "api/helpers/axios";
import { ComicsData } from "types/ComicsData";

interface ComicsList {
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: ComicsData[];
  };
}

export default {
  async getAllComics(
    offsetParam: number,
    searchParams: string | undefined
  ): Promise<ComicsList> {
    const response = await axios.get(`/v1/public/comics`, {
      params: { offset: offsetParam, titleStartsWith: searchParams, limit: 20 },
    });
    return response.data;
  },
  async getComicById(id: number): Promise<ComicsList> {
    const response = await axios.get(`/v1/public/comics/${id}`);
    return response.data;
  },
};

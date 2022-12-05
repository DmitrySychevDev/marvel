// Helper
import axios from "api/helpers/axios";

// Types
import { ComicsList } from "types/ComicsData";

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

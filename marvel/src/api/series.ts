// Helper
import axios from "api/helpers/axios";

// Types
import { SeriesList } from "types/SeriesData";

export default {
  async getAllSeries(
    offsetParam: number,
    searchParams: string | undefined
  ): Promise<SeriesList> {
    const response = await axios.get(`/v1/public/series`, {
      params: { offset: offsetParam, titleStartsWith: searchParams, limit: 20 },
    });
    return response.data;
  },
  async getSeriesById(id: number): Promise<SeriesList> {
    const response = await axios.get(`/v1/public/series/${id}`);
    return response.data;
  },
};

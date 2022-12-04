import axios from "api/helpers/axios";
import { CharacterData } from "types/CharacterData";

interface CharactersList {
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: CharacterData[];
  };
}
export default {
  async getAllCharacters(offset: number): Promise<CharactersList> {
    const response = await axios.get(`/v1/public/characters`, {
      params: { offset },
    });
    return response.data;
  },
};

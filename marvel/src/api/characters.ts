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
  async getAllCharacters(
    offsetParam: number,
    searchParams: string | undefined
  ): Promise<CharactersList> {
    const response = await axios.get(`/v1/public/characters`, {
      params: { offset: offsetParam, nameStartsWith: searchParams },
    });
    return response.data;
  },
  async getCharacterById(id: number): Promise<CharactersList> {
    const response = await axios.get(`/v1/public/characters/${id}`);
    return response.data;
  },
};

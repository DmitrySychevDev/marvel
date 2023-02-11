// Helper
import axios from 'api/helpers/axios';

// Types
import { CharactersList } from 'types/CharacterData';

export default {
  async getAllCharacters(
    offsetParam: number,
    searchParams: string | undefined
  ): Promise<CharactersList> {
    const response = await axios.get(`/v1/public/characters`, {
      params: { offset: offsetParam, nameStartsWith: searchParams, limit: 18 }
    });
    return response.data;
  },
  async getCharacterById(id: number): Promise<CharactersList> {
    const response = await axios.get(`/v1/public/characters/${id}`);
    return response.data;
  }
};

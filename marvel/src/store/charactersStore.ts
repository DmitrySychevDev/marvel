import { observable, action, makeObservable, runInAction } from "mobx";

// Types
import { CharacterData } from "types/CharacterData";

import { characters } from "api";

interface Characters {
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: CharacterData[];
  };
}
class CharactersStore {
  @observable
  characters: Characters = {
    data: {
      offset: 0,
      limit: 0,
      total: 0,
      count: 0,
      results: [],
    },
  };

  @observable
  loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  getCharactersList = async (): Promise<void> => {
    try {
      this.loading = true;
      const charactersList = await characters.getAllCharacters(10);

      runInAction(() => {
        this.characters.data = charactersList.data;
      });
    } catch (ex) {
      console.error(ex);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}

export default new CharactersStore();

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
  character: CharacterData = {
    id: 0,
    name: "",
    description: "",
    thumbnail: { path: "", extension: "" },
    resourceURI: "",
    comics: { items: [] },
    series: { items: [] },
  };

  @observable
  loading: boolean = false;

  @observable
  offset: number = 0;

  @observable
  searchQuery: string | undefined = undefined;

  constructor() {
    makeObservable(this);
  }

  @action
  setOffset(offsetVal: number) {
    this.offset = offsetVal;
  }

  @action
  setSearchQuery(searchQueryVal: string | undefined) {
    this.searchQuery = searchQueryVal;
  }

  @action
  getCharactersList = async (): Promise<void> => {
    try {
      this.loading = true;
      const charactersList = await characters.getAllCharacters(
        this.offset,
        this.searchQuery
      );

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

  @action
  getCharacter = async (id: number): Promise<void> => {
    try {
      this.loading = true;
      const character = await characters.getCharacterById(id);

      runInAction(() => {
        [this.character] = character.data.results;
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

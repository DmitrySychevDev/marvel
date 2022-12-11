import { observable, action, makeObservable, runInAction } from "mobx";

// Types
import { CharacterData, CharactersList } from "types/CharacterData";

import { characters } from "api";

class CharactersStore {
  @observable
  characters: CharactersList = {
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
  error: boolean = false;

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
        this.error = false;
      });
    } catch (ex) {
      console.error(ex);
      runInAction(() => {
        this.error = true;
      });
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
        this.error = false;
      });
    } catch (ex) {
      console.error(ex);
      runInAction(() => {
        this.error = true;
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}

export default new CharactersStore();

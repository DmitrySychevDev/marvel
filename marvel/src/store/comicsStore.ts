import { observable, action, makeObservable, runInAction } from "mobx";

// Types
import { ComicsData, ComicsList } from "types/ComicsData";

import { comics } from "api";

class ComicsStore {
  @observable
  comics: ComicsList = {
    data: {
      offset: 0,
      limit: 0,
      total: 0,
      count: 0,
      results: [],
    },
  };

  @observable
  comic: ComicsData = {
    id: 0,
    title: "",
    description: "",
    thumbnail: { path: "", extension: "" },
    resourceURI: "",
    characters: { items: [] },
    series: undefined,
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
  getComicsList = async (): Promise<void> => {
    try {
      this.loading = true;
      const comicsList = await comics.getAllComics(
        this.offset,
        this.searchQuery
      );

      runInAction(() => {
        this.comics.data = comicsList.data;
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
  getComic = async (id: number): Promise<void> => {
    try {
      this.loading = true;
      const comic = await comics.getComicById(id);

      runInAction(() => {
        [this.comic] = comic.data.results;
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

export default new ComicsStore();

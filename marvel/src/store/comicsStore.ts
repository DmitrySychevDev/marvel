// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { observable, action, makeObservable, runInAction } from 'mobx';

// Types
import { ComicsData, ComicsList } from 'types/ComicsData';

import { comics } from 'api';

class ComicsStore {
  @observable
  comics: ComicsList = {
    data: {
      offset: 0,
      limit: 0,
      total: 0,
      count: 0,
      results: []
    }
  };

  @observable
  comic: ComicsData = {
    id: 0,
    title: '',
    description: '',
    thumbnail: { path: '', extension: '' },
    resourceURI: '',
    characters: { items: [] },
    series: undefined
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
  getComicsList = async (): Promise<void> => {
    try {
      this.loading = true;
      const comicsList = await comics.getAllComics(0, this.searchQuery);

      runInAction(() => {
        this.comics.data = comicsList.data;
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
  getComic = async (id: number): Promise<void> => {
    try {
      this.loading = true;
      const comic = await comics.getComicById(id);

      runInAction(() => {
        [this.comic] = comic.data.results;
        this.error = false;
      });
    } catch (ex) {
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
  getMoreComics = async (page: number): Promise<void> => {
    try {
      this.loading = true;
      const comicsList = await comics.getAllComics(page + 1, this.searchQuery);
      runInAction(() => {
        this.comics.data.results = [
          ...this.comics.data.results,
          ...comicsList.data.results
        ];
      });
    } catch (ex) {
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

export default new ComicsStore();

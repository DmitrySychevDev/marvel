import { observable, action, makeObservable, runInAction } from "mobx";

// Types
import { SeriesData, SeriesList } from "types/SeriesData";

import { series } from "api";

class SeriesStore {
  @observable
  seriesList: SeriesList = {
    data: {
      offset: 0,
      limit: 0,
      total: 0,
      count: 0,
      results: [],
    },
  };

  @observable
  series: SeriesData = {
    id: 0,
    title: "",
    description: "",
    thumbnail: { path: "", extension: "" },
    resourceURI: "",
    comics: { items: [] },
    characters: { items: [] },
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
  getSeriesList = async (): Promise<void> => {
    try {
      this.loading = true;
      const seriesResp = await series.getAllSeries(
        this.offset,
        this.searchQuery
      );

      runInAction(() => {
        this.seriesList.data = seriesResp.data;
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
  getSeries = async (id: number): Promise<void> => {
    try {
      this.loading = true;
      const seriesResp = await series.getSeriesById(id);

      runInAction(() => {
        [this.series] = seriesResp.data.results;
      });
    } catch (ex) {
      runInAction(() => {
        this.error = true;
      });
      console.error(ex);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}

export default new SeriesStore();

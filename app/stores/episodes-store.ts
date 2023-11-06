
import { print } from 'graphql';

import { GET_EPISODES } from '../gql/queries/get_episodes';
import { Episode } from '../interfaces/Episode';
import { action, makeAutoObservable, runInAction } from 'mobx';
import { RootStore } from './RootStore';
import { GET_EPISODE } from '../gql/queries/get_episode';


class EpisodeStore {
  root: RootStore;
  episodes: Episode[] = [];
  sortedEpisodes: Episode[] = [];
  episodeItem?: Episode;
  totalCount = 0;
  loading = false;
  error = null;
  searchQuery = "";
  // countVisible = 5;
  // sortedDate = "";

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  };

  setEpisodes = action ((episodes: Episode[]) => {
    this.episodes = episodes;
  });

  setSortedEpisodes = action ((sortedEpisodes: Episode[]) => {
    this.sortedEpisodes = sortedEpisodes;
  });

  setEpisodeItem = action ((episodeItem: Episode) => {
    this.episodeItem = episodeItem;
  });

  setTotalCount = action((totalCount: number) => {
    this.totalCount = totalCount;
  });

  setLoading = action((loading: boolean) => {
    this.loading = loading;
  });

  setError = action((error: any) => {
    this.error = error;
  });

  setSearchQuery = action((searchQuery: string) => {
    this.searchQuery = searchQuery;
  });


  // get receivedEpisodes() {
  //   return this.episodes;
  // };

  // get receivedCountEpisodes() {
  //   return this.totalCount;
  // }

  // get receivedEpisodeItem() {
  //   return this.episodeItem;
  // };

  get getSortedEpisodes() {
    return this.sortedEpisodes;
  }

  get getSearchQuery() {
    return this.searchQuery;
  }


  hydrate = (data: Episode[]) => {
    if (!data) return;
    this.setEpisodes(data);
  };

  fetchEpisodes = async () =>  {
    try {
      this.setLoading(true);
  
      const response = await fetch('https://rickandmortyapi.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: print(GET_EPISODES),
          variables: {
            filter: {
              name: this.searchQuery,
            }
          },
        }),
      });

      const {data} = await response.json();
      const {episodes} = data;
      runInAction(() => {
              this.setEpisodes(episodes.results);
              this.setTotalCount(episodes.info.count);
              this.setError(null);
            })

    } catch (error) {
      console.log(error)
      runInAction(() => this.setError(error));
    } 
    finally {
      runInAction(() => this.setLoading(false));
    }
  };

  fetchEpisodeItem = async (id: string) =>  {

    try {
      this.setLoading(true);
  
      const response = await fetch('https://rickandmortyapi.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: print(GET_EPISODE),
          variables: {
              id,
          },
        }),
      });

      const {data} = await response.json();
      const {episode} = data;
      runInAction(() => {
              this.setEpisodeItem(episode);
              this.setError(null);
            })

    } catch (error) {
      runInAction(() => this.setError(error));
    } 
    finally {
      runInAction(() => this.setLoading(false));
    }
  };

}

export default EpisodeStore;


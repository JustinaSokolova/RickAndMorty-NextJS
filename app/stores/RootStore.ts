
import episodesStore from "./episodes-store";

export type RootStoreHydration = {
  childStoreOne?: episodesStore;
};

export class RootStore {
  episodesStore: episodesStore;

   constructor() {
    this.episodesStore = new episodesStore(this);
    // this.childStoreOne = childStoreOne(this);
  }
  // hydrate(data: RootStoreHydration) {
  //   // check if there is data for this particular store
  //   if(data.childStoreOne){
  //     this.childStoreOne.hydrate(data.childStoreOne);
  //   }
  // }
}

'use client'
import { createContext, useContext } from "react";
import EpisodeStore from "./stores/episodes-store";
// import {RootStore} from "./stores/RootStore.ts";

export const RootStoreContext = createContext<EpisodeStore | null>(null);

export const useStores = () => {
  const context = useContext(RootStoreContext);

  if(context === null){
    throw new Error('useStore must be used within RootStoreProvider')
  }

  return context;
}
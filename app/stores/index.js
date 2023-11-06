import { enableStaticRendering } from "mobx-react-lite";
import EpisodeStore from "./episodes-store";
// import { RootStore } from "./RootStore";

// enable static rendering ONLY on server
enableStaticRendering(typeof window === "undefined");

// init a client store that we will send to client (one store for client)
let clientStore;

const initStore = (initData) => {
  // check if we already declare store (client Store), otherwise create one
  const store = clientStore ?? new EpisodeStore();
  // hydrate to store if receive initial data
  if (initData) store.hydrate(initData);

  // Create a store on every server request
  if (typeof window === "undefined") return store;

  // Otherwise it's client, remember this store and return
  if (!clientStore) clientStore = store;
  return store;
};

// Hook for using store
export function useStore(initData) {
  return initStore(initData);
}

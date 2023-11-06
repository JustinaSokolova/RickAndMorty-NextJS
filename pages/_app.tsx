import React from 'react';
import type { NextPage } from 'next';
import { useStore } from "../app/stores/index";
import { RootStoreContext } from '../app/root-store-context';
import GlobalStyle from '../app/styles/global-styles';
import Header from '../app/components/common/Header';


const MyApp = ({
  Component,
  pageProps,
}: {
  Component: NextPage;
  pageProps: any;
}) => {

  const store = useStore(pageProps.initialState);

  return (
    <>
    <GlobalStyle /> 
    <RootStoreContext.Provider value={store}>
    <Header />
      <Component {...pageProps} />
    </RootStoreContext.Provider>
    </>
  );
};

export default MyApp;
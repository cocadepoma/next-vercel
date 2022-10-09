import { NextPage } from 'next'
import { AppProps } from 'next/app';

import '../styles/globals.css';

type NexPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element;
}

type AppPropsWithLayout = AppProps & {
  Component: NexPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <Component {...pageProps} />
  );
};

export default MyApp

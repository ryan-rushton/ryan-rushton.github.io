import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/site.scss';

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

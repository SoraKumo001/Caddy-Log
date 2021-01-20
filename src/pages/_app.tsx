import React, { useEffect } from 'react';
import { Menu } from '../components/Menu';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ThemeProvider as MaterialUIThemeProvider, StylesProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppContext, AppProps } from 'next/app';
import theme from '../styles/theme';
import { Global, Root, View } from './_app.styled';
import { setOptions, createCache, getDataFromTree } from './../libs/useFetch';

const IS_SERVER = !process.browser;

setOptions({
  fetch: (key) =>
    fetch(!/^https?:/.test(key) && IS_SERVER ? `http://localhost:3000${key}` : key).then((data) =>
      data.json()
    ),
});

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);
  if (!IS_SERVER) createCache(pageProps.cache);

  return (
    <StylesProvider injectFirst>
      <MaterialUIThemeProvider theme={theme}>
        <StyledComponentsThemeProvider theme={theme}>
          <CssBaseline />
          <Global />
          <Root>
            <Menu />
            <View>
              <Component />
            </View>
          </Root>
        </StyledComponentsThemeProvider>
      </MaterialUIThemeProvider>
    </StylesProvider>
  );
};
App.getInitialProps = async ({ Component, router, AppTree }: AppContext) => {
  const cache = IS_SERVER
    ? await getDataFromTree(<AppTree Component={Component} pageProps={{}} router={router} />)
    : {};
  return { pageProps: { cache } };
};
export default App;

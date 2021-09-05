import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Container, useMediaQuery, CssBaseline } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';
// import './App.css';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Container>
          <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/movie-detail" component={Detail} />
        </Container>
      </HashRouter>
    </ThemeProvider>
  );
}
export default App;

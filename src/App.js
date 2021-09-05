import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, useMediaQuery, CssBaseline } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import NotFound from './routes/NotFound';
import Navigation from './components/Navigation';
import './reset.css';

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
      <Router>
        <Container mt={10}>
          <Navigation />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/movie-detail" component={Detail} />
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
}
export default App;

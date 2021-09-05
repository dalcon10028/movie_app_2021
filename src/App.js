import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Container,
  CssBaseline,
  Fab,
  Icon,
  makeStyles,
} from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import NotFound from './routes/NotFound';
import Navigation from './components/Navigation';
import './reset.css';

const useStyles = makeStyles({
  fab: {
    position: 'fixed',
    bottom: 16,
    right: 16,
  },
});

function App() {
  const [darkState, setDarkState] = useState(true);
  const palletType = darkState ? 'dark' : 'light';
  const darkTheme = createTheme({
    palette: {
      type: palletType,
    },
  });

  const classes = useStyles();

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={darkTheme}>
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
      <Fab color="primary" className={classes.fab} onClick={handleThemeChange}>
        <Icon>{darkState ? 'light_mode' : 'dark_mode'}</Icon>
      </Fab>
    </ThemeProvider>
  );
}
export default App;

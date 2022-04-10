import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';

import theme from './theme';
import home from './pages/home';


axios.defaults.baseURL = "https://us-east4-wdrc-events.cloudfunctions.net/api";
// axios.defaults.baseURL = 'http://localhost:5000/wdrc-events/us-east4/api';

function App() {
  // const classes = useStyles();
  
  return (
    <>
    <ThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline />

        <Router>
          <div>
            <Switch>
              <Route path="/" component={home} />
            </Switch>
          </div>
          </Router>
  
    </React.Fragment>
    </ThemeProvider>
    </>
  );
}

export default App;

import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Paper from '@material-ui/core/Paper';
import ProductCTA from '../modules/views/ProductCTA';
import EventSeries from '../modules/views/EventSeries';
import SidebarSchedule from '../modules/views/SidebarSchedule';

import axios from 'axios';

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  image: {
    height: 250,
    maxWidth: '100%',
    marginBottom: '40px',
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
});


class about extends Component {
  state = {
    events: [],
    uiLoading: true,
  };
  
  componentWillMount = () => {
		// authMiddleWare(this.props.history);
		const authToken = localStorage.getItem('AuthToken');
		axios.defaults.headers.common = { Authorization: `${authToken}` };
		axios
			.get('/events')
			.then((response) => {
				this.setState({
          events: response.data.slice(0, 8),
          uiLoading: false
				});
			})
			.catch((error) => {
				console.log(error);
				this.setState({ errorMsg: 'Error in retrieving the data' });
			});
  };
  
  render() {
    const { classes } = this.props;

    return (
      <>
      <main>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Grid item xs={12} md={8}>
            
            <Typography variant="h1">
              About us
            </Typography>
            <Divider />

            <Typography className={classes.markdown}>
              <strong>World Drag Racing Circuit (WDRC) </strong> is a drag racing league created so that imports, which includes Japanese, European, and exotics vehicle can race against domestic market vehicles. Due to the variety of formats and platform our index and heads up program minimizes the need to focus on specific engine size, chassis or power adders. This program makes racing fun, while maintaining the challenging and competitive nature of the sport of drag racing.
            </Typography>
            <Typography className={classes.markdown}>
              Mr. Thomas built, raced, and tuned all types of cars and wanted to create a series that would allow these cars to race against each other. We created the series after doing several themed events for domestic and the import cars and realized it was more fun if they raced each other. WDRC race series facilities all types of drag racing platforms and creates an even playing field for all. The index class eliminates the need for monitoring engine size, turbo size and drive train format. Run the time, run the index, simple and fun.
            </Typography>

            <img
              className={classes.image}
              src="./logos/wdrc_oval.png"
              alt="World Drag Racing Circuit"
            />

            <Typography variant="h2">
              Why Imports vs Domestics?
            </Typography>
            <Typography className={classes.markdown} >
              With the complexity of the vehicle and the various drive trains that comes with todays vehicles, it becomes difficult to have a class to fit all.
            </Typography>
            <Typography className={classes.markdown} >
              Since we primarily cater to the street modifiers of both import and domestic formats, it was important to keep it simple. Vinny Ten of Vinny Ten Racing created the Index format, which simplified the classes by focusing on the times these cars ran and not the chassis layout, engine or power adders. Again making it simple and keeping it fun and competitive for all.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
          <Paper elevation={0} className={classes.sidebarAboutBox}>
            <Typography variant="h6">
                Schedule
            </Typography>
            <Divider />
            <Typography>
              &nbsp;
            </Typography>

            <SidebarSchedule events={this.state.events} />

          </Paper>
          </Grid>
        </Grid>
      </main>
      <Divider />
      <EventSeries />
      <Divider />
      <ProductCTA />
      
      </>
    )
  }
}

export default withStyles(styles)(about);
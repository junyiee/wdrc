import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';

import ProductCTA from '../modules/views/ProductCTA';
import EventSeries from '../modules/views/EventSeries';
import SidebarSchedule from '../modules/views/SidebarSchedule';
import Typography from '../modules/components/Typography';

import axios from 'axios';

const styles = (theme) => ({
  root: {
    // display: 'flex',
  },
  mainGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  image: {
    width: '100%',
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  media: {
    height: 0,
    width: '100%',
    paddingTop: '100%'
  }
});

class classes extends Component {
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
              Results
            </Typography>
            <Divider />

            <Paper align="center" className={classes.mainGrid} elevation={0}>
            <Typography>
              2020
            </Typography>
            </Paper>
            <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
            <Card className={classes.root}>
              <CardActions>
                <CardMedia
                className={classes.media}
                image="https://storage.googleapis.com/results.worlddragracingcircuit.com/p/thumb-20190303rwlaresults.jpg"
                title="results"
                />
              </CardActions>
            </Card>
            </Grid>
            </Grid>
            
            
            <Paper align="center" className={classes.mainGrid} elevation={0}>
            <Typography>
              2018
            </Typography>
            </Paper>

            <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
            <Card className={classes.root}>
              <CardActions>
                <CardMedia
                className={classes.media}
                image="https://storage.googleapis.com/results.worlddragracingcircuit.com/p/thumb-20181111rwlaresults.jpg"
                title="results"
                />
              </CardActions>
            </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
            <Card className={classes.root}>
              <CardActions>
                <CardMedia
                className={classes.media}
                image="https://storage.googleapis.com/results.worlddragracingcircuit.com/p/thumb-20180304rwlaresults_modernsuperstreet.jpg"
                title="results"
                />
              </CardActions>
            </Card>
            </Grid>

            </Grid>

            <Paper align="center" className={classes.mainGrid} elevation={0}>
            <Typography>
              2017
            </Typography>
            </Paper>
            
            <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
            <Card className={classes.root}>
              <CardActions>
                <CardMedia
                className={classes.media}
                image="https://storage.googleapis.com/results.worlddragracingcircuit.com/p/thumb-2017-raceresults.jpg"
                title="results"
                />
              </CardActions>
            </Card>
            </Grid>

            </Grid>

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

export default withStyles(styles)(classes);
import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import {Box, Card, CardHeader, CardActionArea, CardActions, CardMedia, CardContent} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import RoomIcon from '@material-ui/icons/Room';
import FacebookIcon from '@material-ui/icons/Facebook';
import EventIcon from '@material-ui/icons/Event';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
import axios from 'axios';

// const {BigQuery} = require('@google-cloud/bigquery');
// const keys = '../../../functions/api/wdrc-events-ceab3bf35544.json';

// import MainFeaturedPost from '../MainFeaturedPost';


// const cdn_public = "https://flyers.worlddragracingcircuit.com";
// const url = "https://www.worlddragracingcircuit.com/assets/img/events/thumb-";
const cdn = "https://storage.googleapis.com/flyers.worlddragracingcircuit.com";

// async function querySchedule() {
//   const bigqueryClient = new BigQuery({ projectId: 'wdrc-events', keyFileName: keys} ); 

//   const query = `SELECT * 
//     FROM \`wdrc-events.schedule.scheduled_events\` 
//     LIMIT 1000`;
  
//   let events = [];
//   const [rows] = await bigqueryClient.query({query: query, location: 'US' });
//   rows.forEach( (row) => {	
//       if (row.show_on_page) {
//         events.push({
//           eventId: row.id,
//           date: row.date.value,
//           facebook: row.facebook_event_page,
//           flyer_img: row.flyer_img_url,
//           region: row.region,
//           tickets: row.ticket_url,
//           title: row.event_name,
//           venue_name: row.venue_name,
//           venue_address: row.venue_address
//         });
//       }
//   });
//   console.log("done - " + events.length);
//   return events;
// }

const styles = (theme) => ({
  card: {
    // display: 'flex',
  },
  cardDetails: {
    flex: 1,
    width: '100%'
  },
  cardMedia: {
    width: 160,
    height: 'auto',
  },
  mainGrid: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
  },
  cover: {
    height: 0,
    width: '100%',
    backgroundSize: 'contain',
    paddingTop: '120%', // 16:9
    // paddingTop: '56.25%', // 16:9
    // height: 'auto',
    // minHeight: 150
  },
  listing: {
    marginTop: theme.spacing(2),
  },
  dialogStyle: {
    maxWidth: '80%',
    // width: '50%'
  },
  b_float_meta: {
    width: '50px',
    border: '1px solid #ececec',
    float: 'left',
    textAlign: 'center',
    fontSize: '14px',
    borderRadius: '3px',
    lineHeight: '20px',
    color: '#767676',
    padding: '4px',
    margin: '0 8px 0 0',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  b_float_meta_day: {
    color: '#000000',
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: 500,
  },
  centered: {
    borderTop: '1px solid #ececec',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  months: {
    fontWeight: '300',
    color: '#767676',
  }
});


class schedule extends Component {
	constructor(props) {
		super(props);

		this.state = {
      events: [],
      uiLoading: true,
      showModal: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.prevClick = this.prevClick.bind(this);
  }  
  
  componentWillMount = () => {
		const authToken = localStorage.getItem('AuthToken');
		axios.defaults.headers.common = { Authorization: `${authToken}` };
		axios
			.get('/events')
			.then((response) => {
				this.setState({
          events: response.data,
          uiLoading: false
				});
			})
			.catch((error) => {
				console.log(error);
				this.setState({ errorMsg: 'Error in retrieving the data' });
			});
  };
  
  openModal(index) {
    let url = `${cdn}/${new Date(index.event.date).getFullYear()}/${index.event.flyer_img}`;

    this.setState({
      showModal: true,
      imgURL: url,
      eventTitle: index.event.title,
      facebook: index.event.facebook,
      tickets: index.event.tickets,
      venue_name: index.event.venue_name
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      imgIndex: 0,
      rotation: 0
    });
  }

  nextClick() {
    this.setState(prevState => {
      return {
        imgIndex:
          prevState.imgIndex === prevState.imgUrlLength - 1
            ? 0
            : prevState.imgIndex + 1
      };
    });
  }

  prevClick() {
    this.setState(prevState => {
      return {
        imgIndex:
          prevState.imgIndex === 0
            ? prevState.imgUrlLength - 1
            : prevState.imgIndex - 1
      };
    });
  }

  
  
  render() {
    const { classes } = this.props;
    const months = this.state.events.map((event) => new Date(event.date).toLocaleDateString("en-US", { month:"short" }).toUpperCase());
    
    return (
      <>
      <main>
          {/* <MainFeaturedPost post={mainFeaturedPost} /> */}
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* <Main title="From the firehose" posts={posts} />*/}
            <Grid item xs={12}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                  Events
                </Typography>

                <Divider />

                <div className={classes.centered}>
                {Array.from(new Set(months)).map((mm) => 
                      <Button variant="caption" className={classes.months} color="textSecondary" disabled>
                        {mm} ({months.filter(value => value===mm).length})
                      </Button> 
                )}
                </div>


                <Grid container spacing={2} className={classes.listing}> 
                {this.state.events.map((event) => (
                <Grid item sm={6} md={4}  key={'g'+event.eventId}>
                  <Card className={classes.card} variant="outlined" key={event.eventId}>
                    <CardHeader
                      title={<><Box component="div" className={classes.b_float_meta}>
                      {new Date(event.date).toLocaleDateString("en-US", { month:"short" }).toUpperCase() }
                        <Box component="div" className={classes.b_float_meta_day}>{new Date(event.date).toLocaleDateString("en-US", { day: "2-digit" })}</Box>
                      </Box>
                      <Typography component="h6" variant="h6">
                          {event.title} { event.city ? '(' + event.title + ')' : ''}
                        </Typography></>}
                      subheader={<Typography variant="subtitle1" color="textSecondary" gutterBottom>{(event.venue_name) ? event.venue_name  : <p> </p>}
                        </Typography>}
                    />
                    <CardActionArea component="a" onClick={() => this.openModal({ event })} value={event} sx={{ width: 'auto' }}>
                    <CardMedia
                      className={classes.cover}
                      image={`${cdn}/${new Date(event.date).getFullYear()}/thumb-600-${event.flyer_img}`}
                      title={event.title}
                    />  
                      <Hidden xlDown>
                        <CardMedia className={classes.cardMedia} 
                                  image={`${cdn}/${new Date(event.date).getFullYear()}/${event.flyer_img}`}
                                  component="img"
                                  title={event.title} />
                      </Hidden>
                      </CardActionArea>
                      <CardContent className={classes.cardDetails}>
                        <Typography variant="subtitle2" color="textSecondary">
                          <EventIcon fontSize="small" color="textSecondary"/> {new Date(event.date).toLocaleDateString("en-US", { timeZone: 'America/New_York', day: '2-digit', month: 'long', year: 'numeric' })}
                        </Typography>
                        <Typography variant="subtitle2">
                          <RoomIcon fontSize="small" color="textSecondary" /> 
                          { (event.venue_name) ? event.venue_name  : 'To be announced' }
                          <Typography variant="caption" color="textSecondary">
                          { (event.venue_address) ? ' ' + event.venue_address  : ' ' }
                        </Typography>
                        </Typography> 
                      </CardContent>
                      <CardActions className={classes.centered}>
                          {event.tickets !== "" ?
                          <Button variant="contained" color="textSecondary" startIcon={<LocalActivityIcon />} href={event.tickets}> 
                            Buy Tickets  </Button>  : 
                          <Button variant="contained" color="textSecondary" startIcon={<LocalActivityIcon />} disabled>Soon Come </Button>}

                          {event.facebook !== "" ?
                          // <IconButton color="primary" href={event.facebook} variant="outlined"> <FacebookIcon /> </IconButton> 
                          <Button variant="contained" color="secondary" startIcon={<FacebookIcon />} href={event.facebook}> 
                            Event Page  </Button>
                          : '' }
                      </CardActions>
                    </Card>
                  
                </Grid>
                ))}
                </Grid>
              </Paper>

            </Grid>

          </Grid>

          <Dialog open={this.state.showModal} onClose={this.closeModal}  aria-labelledby="view-large" key={this.state.eventId} maxWidth="lg">
          <DialogTitle>
            {this.state.eventTitle}
          </DialogTitle>
          <DialogContent>

            <img
                width="100%"
                alt="Alternative Description"
                src={this.state.imgURL}
              />
            
            </DialogContent>
            <DialogActions className={classes.root}>
            {this.state.tickets !== "" ?  
            <Button variant="outlined" color="textSecondary" href={this.state.tickets} startIcon={<LocalActivityIcon />} >
              Buy Tickets
            </Button> : <Button variant="contained" color="textSecondary" startIcon={<LocalActivityIcon />} disabled>Soon Come </Button>}
            {this.state.facebook !== "" ?  
            <Button variant="outlined" color="textSecondary" href={this.state.facebook} startIcon={<FacebookIcon />} >
              Event Page
            </Button> : <p></p> }

              <Button onClick={this.closeModal}>Close</Button>
            </DialogActions>
          </Dialog>
        </main>

      </>
    )
  }
}

export default withStyles(styles)(schedule);
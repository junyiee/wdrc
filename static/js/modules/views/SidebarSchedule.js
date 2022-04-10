import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '../components/Typography';
import Button from '../components/Button';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Dialog, DialogTitle, DialogContent, DialogActions, Link } from '@material-ui/core';

const cdn = "https://storage.googleapis.com/flyers.worlddragracingcircuit.com";

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    paddingBottom: 0,
  },
  cover: {
    width: 200,
    height: 'auto',
  },
  dateInfo: {
    fontSize: 14,
  },
  image: {
    height: 250,
    maxWidth: '100%',
  },
  dialogTitle: {
    textAlign: 'center'
  }
});

function SidebarSchedule(props) { 
  const { classes, events } = props;
  const [open, SetOpen] = React.useState(false);
  const [imgURL, SetImgUrl] = React.useState('');
  const [eventTitle, SetEventTitle] = React.useState('');
  const [ticketsURL, SetTicketsUrl] = React.useState('');
  const [eventId, SetEventId] = React.useState('');
  

  const openModal  = (index) => {
    console.log("TRYING TO OPEN THIS");
    console.log(index);
    let url = `${cdn}/${new Date(index.event.date).getFullYear()}/${index.event.flyer_img}`
    SetOpen(true);
    SetImgUrl(url); 
    SetEventTitle(index.event.title); 
    SetTicketsUrl(index.event.tickets); 
    SetEventId(index.event.eventId);
  };

  const closeModal  = () => {
    SetOpen(false);
  }

  return (

    <Grid container spacing={4}>
      {events.map((event) => (
        <Grid item xs={12}>
          <CardActionArea component="a" onClick={() => openModal({ event })} value={event} sx={{ width: 'auto' }}>
            <Card className={classes.root} variant="outlined" key={event.eventId}>
              <CardMedia
                className={classes.cover}
                image={`${cdn}/${new Date(event.date).getFullYear()}/thumb-${event.flyer_img}`}
                title={event.title}
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h6" variant="h6">
                    {event.title}
                  </Typography>
                  <Typography color="textSecondary"  className={classes.dateInfo} gutterBottom>
                    {new Date(event.date).toLocaleDateString("en-US")}
                  </Typography>
                  {event.tickets !== "" ?  
                  <Link size="small" color="primary" href={event.tickets}>
                    Buy Tickets
                  </Link> : <p></p>}
                </CardContent>
              </div>
            </Card>
          </CardActionArea>
        </Grid>
      ))}

    <div class="fb-page" data-href="https://www.facebook.com/worlddragracingcircuit" data-tabs="timeline, events" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false">
      <blockquote cite="https://www.facebook.com/worlddragracingcircuit" class="fb-xfbml-parse-ignore">
        <a href="https://www.facebook.com/worlddragracingcircuit">World Drag Racing Circuit</a>
      </blockquote>
    </div>
    
   
    <Dialog open={open} onClose={closeModal}  aria-labelledby="view-large" key={eventId}>
      <DialogTitle className={classes.dialogTitle}>
        {eventTitle}
      </DialogTitle>
      <DialogContent>

        <img
            width="100%"
            alt="Alternative Description"
            src={imgURL}
          />
          <br/>

        {ticketsURL !== "" ?  
        <Button variant="filled" color="primary" href={ticketsURL}>
          Buy Tickets
        </Button> : <p></p>}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Close</Button>
        </DialogActions>
      </Dialog>
   </Grid>
  );
}

SidebarSchedule.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SidebarSchedule);



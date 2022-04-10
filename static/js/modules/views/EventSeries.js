import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    // backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 80,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="./productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Recurring Event Series
          </Typography>
        </Grid>


          <Grid item xs={12} md={6}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://storage.googleapis.com/flyers.worlddragracingcircuit.com/logos/all_in_ultimate.png"
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                All In Motorsports
              </Typography>
              <Typography variant="h5">
                {' ‘All In’ Series is designed to challenge the racers, builders and tuners with a no limit rules.'}
                {' Everything goes.'}
              </Typography>
            </div>
          </Grid>
          {/* <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://storage.googleapis.com/flyers.worlddragracingcircuit.com/logos/gambler.png"
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                Gambler Series
              </Typography>
              <Typography variant="h5">
                {'Drifting series'}
              </Typography>
            </div>
          </Grid> */}
          {/* <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src=""
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                AutoSport Jubilee
              </Typography>
              <Typography variant="h5">
                {'A festival of speed and sound. '}
              </Typography>
            </div>
          </Grid> */}
          <Grid item xs={12} md={6}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://storage.googleapis.com/flyers.worlddragracingcircuit.com/logos/rw_wdrc.png"
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                RaceWars USA
              </Typography>
              <Typography variant="h5">
                {'National Racing Tournament with RaceWars USA series'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} align="center">
          <Typography variant="caption">
            {'Please refer to NHRA website for rules and regulations regarding track safety. '}<br/>
            {'All are our events are family, pet and kid friendly.'}
          </Typography>
          </Grid>
          
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
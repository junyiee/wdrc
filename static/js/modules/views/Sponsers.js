import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(14),
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    width: 200,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
  },
});

function Sponsors(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="./productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          Partners
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <div className={classes.item}>
              <div className={classes.number}>Southbay Fuel Injectors</div>
                <img
                  src="./logos/southbay.png"
                  alt="suitcase"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                Southbay fuel Injectors is the sponsor of WDRC 2015 9.50 index and the WDRC Chase to the 8’s challenge. This is a great company with awesome products and even more awesome customer service. Contact them for all you fuel needs as they carry a line of fuel rails, fuel pumps, brackets, pigtails and much more. They have everything you need to complete your high performance fuel system.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.item}>
                <div className={classes.number}>Racewars</div>
                <img
                  src="./logos/racewars.png"
                  alt="graph"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  National Racing Tournament.                 VISIT THEIR WEBSITE https://www.racewarsusa.com/
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        {/* <Button
          color="secondary"
          size="large"
          variant="contained"
          className={classes.button}
          component="a"
          href="/premium-themes/onepirate/sign-up/"
        >
          Get started
        </Button> */}
      </Container>
    </section>
  );
}

Sponsors.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sponsors);
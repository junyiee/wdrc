import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';

import axios from 'axios';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    display: 'flex',
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.warning.main,
    padding: theme.spacing(8, 3),
  },
  cardContent: {
    maxWidth: 400,
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  button: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  imagesWrapper: {
    position: 'relative',
    backgroundImage: `url('./img/2017-rwla-race-crowd.jpg')`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
    backgroundSize: 'auto',
    backgroundRepeat: 'no-repeat',
    opacity: .8
  },
  imageDots: {
    position: 'absolute',
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  image: {
    position: 'absolute',
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.grey,
    opacity: 0.4,
    zIndex: -1,
  },
});

function ProductCTA(props) {
  const { classes } = props;
  const [open, SetOpen] = React.useState(false);
  const [email, SetEmail] = React.useState("");
  const [firstname, SetName] = React.useState("");

  
  const handleSubmit = (event) => {
    event.preventDefault();
    SetOpen(true);

    const data = { email, firstname };
    console.log("adding this ");
    console.log(data.email, data.firstname)

    
    axios
			.post('/leads/new', data)
			.then((response) => {
        SetEmail("");
        SetName("");
			})
			.catch((error) => {
				console.log(error);
			});
    
    setTimeout(function() { SetOpen(false);}, 3000);
  };
  const handleEmail = (e) => {
    SetEmail(e.target.value);
  };

  const handleName = (e) => {
    SetName(e.target.value);
  };

  const handleClose = () => {
    SetOpen(false);
  };
  //
  return (
    <Container className={classes.root} component="section" id="signup">
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <form onSubmit={handleSubmit} className={classes.cardContent}>
              <Typography variant="h2" component="h2" gutterBottom>
                WORLD DRAG RACING CIRCUIT ALERTS
              </Typography>
              <Typography variant="h5">
                Subscribe to our newsletter and get information about our upcoming events.
              </Typography>
              <TextField name="email" noBorder className={classes.textField} placeholder="Your email" value={email} onChange={handleEmail} />
              <TextField name="firstname" noBorder className={classes.textField} placeholder="Frist Name" value={firstname} onChange={handleName} />
              <Button type="submit" color="primary" variant="contained" className={classes.button}>
                Keep me updated
              </Button>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <div className={classes.backdrop} />
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        onClose={handleClose}
        message="Thanks for subscribing!"
      />
    </Container>
  );
}

ProductCTA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCTA);



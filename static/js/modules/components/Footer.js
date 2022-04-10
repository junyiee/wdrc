import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import MyTypography from './Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

function Copyright() {
  return (
    <Typography variant="caption" color="textSecondary" align="center">
      {'Copyright © 2011-'} {new Date().getFullYear()} 
      {' '}
      <Link color="inherit" href="https://www.worlddragracingcircuit.com/">
        World Drag Racing Circuit
      </Link>{'.'}
    </Typography>
  );
}

export default function Footer(props) {
  const classes = useStyles();
  const { social, sections } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={4}>

              <MyTypography variant="h6" marked="left" gutterBottom>
                Social
              </MyTypography>

              <ul className={classes.list}>
              {social.map((network) => (
                <li className={classes.listItem} key={network.url+"li"}>
                <Link display="block" variant="body1" href={network.url} key={network} className={classes.icon}>
                  <Grid container direction="row" spacing={1} alignItems="center">
                    <Grid item alt={network.name}>
                      <network.icon />
                    </Grid>
                    <Grid item>{network.name}</Grid>
                  </Grid>
                </Link>
                </li>
              ))}
              </ul>

          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <MyTypography variant="h6" marked="left" gutterBottom>
              Sections
            </MyTypography>
            
            <ul className={classes.list}>
            {sections.map((section) => (
              <li className={classes.listItem} key={section.url+"li"}>
                <Link
                  noWrap
                  key={section.url}
                  href={section.url}
                >
                  {section.title}
                </Link>
              </li>
            ))}
              {/* <li className={classes.listItem}>
                <Link href="/premium-themes/onepirate/terms/">Terms</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/premium-themes/onepirate/privacy/">Privacy</Link>
              </li> */}
            </ul>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <MyTypography variant="h6" marked="left" gutterBottom>
              Find Us
            </MyTypography>
            <Typography variant="body2" marked="left" gutterBottom>
              Patrick Thomas, CEO/Race Director
              <br />
              info@worlddragracingcircuit.com
            </Typography>
            <Typography variant="body2" marked="left" gutterBottom>
              
            </Typography>
          </Grid>
          <Grid item>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

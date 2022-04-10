import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    marginBottom: theme.spacing(4),
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 24,
    height: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.white,
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  menuLink: {
    width: 100,
    textAlign: 'center',
    fontWeight: 'bold'
  }
}));


export default function Header(props) {
  const classes = useStyles();
  const { social, sections } = props;
  const activeStyle = { borderBottom: '2px solid #e74c3c' };
  const pathname = window.location.pathname;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography variant="caption" color="textSecondary" align="center">
          {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }
          </Typography>
        <Button size="small" href="about">About</Button>
        <Button size="small" href="partners">Contact</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {/* {title} */}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        {/* <Button variant="outlined" size="small">
          Sign up
        </Button> */}
        <div item={"true"} className={classes.icons} direction="row" spacing={1} > 
            {social.map((network) => ( 
                <Link display="block" variant="body1" href={network.url} key={network.name} className={classes.icon}>
                      <network.icon />
                </Link> 
            ))}
        </div>
      </Toolbar>

      <Card>
          <CardMedia
            component="img"
            alt="World Drag Racing Circuit"
            height="250"
            image="./img/wdrc_banner.jpg"
            title="World Drag Racing Circuit"
          />
        </Card>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
            borderbottom="1"
            style={ section.url === pathname.substring(1) ? activeStyle : {}} 
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      {/* <Container fixed>
      </Container> */}
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
// External Pages
import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '../modules/components/Typography';
import ProductCTA from '../modules/views/ProductCTA';
import ProductValues from '../modules/views/EventSeries';
import ProductHeroLayout from '../modules/views/ProductHeroLayout'; 

import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YoutubeIcon from '@material-ui/icons/YouTube';

import Header from '../modules/components/Header';
import Footer from '../modules/components/Footer';
import { Route } from 'react-router-dom';

import about from './about';
import schedule from './schedule';
import classPage from './classes';
import results from './results';
import gallery from './gallery';
import partners from './partners';
import shop from './shop';
import login from './login';
import admin from './admin';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },

//   .bnetDashboard-bnetDashboard132:hover {
//     position: relative;
//     transform: translateY(-6px);
//     box-shadow: 0px 3px 15px rgba(0,0,0,0.5);
// }

});

// const icons = {
//   social: [
//     { name: "facebook", icon: FacebookIcon },
//     { name: "instagram", icon: InstagramIcon },
//     { name: "youtube", icon: YoutubeIcon },
//   ]
// };

const page = {
  sections: [
    { title: 'HOME', url: '/' },
    { title: 'WDRC101', url: 'about' },
    { title: 'Schedule & Tickets', url: 'schedule' },
    { title: 'Classes', url: 'classes' },
    { title: 'Results', url: 'results' },
    { title: 'Gallery', url: 'gallery' },
    { title: 'Partners', url: 'partners' },
    { title: 'Shop', url: 'shop' },
  ],
  social: [
    { name: 'World Drag Racing Circuit', icon: FacebookIcon, url: 'https://www.facebook.com/worlddragracingcircuit/' },
    { name: 'World Drag Racing', icon: InstagramIcon, url: 'https://instagram.com/worlddragracing' },
    { name: 'Racers + Tuners', icon: YoutubeIcon, url: 'https://www.youtube.com/racersntuners' },
  ]
};


const backgroundImage = './img/burnout.jpg';
  // './img/2017-rwla-race-crowd.jpg';

class home extends Component {


  render(props) {
    const { classes } = this.props;
    
    return (
      <>
      <div> 
        { (window.location.pathname === '/login') ? <Route exact path="/login" component={login} />
        // : (window.location.pathname === '/admin') ? <Route exact path="/admin" component={admin} />
        : (window.location.pathname.includes('/admin')) ? <Route path="/admin" component={admin} />
        : <Container maxWidth="lg">
          <Header sections={page.sections} social={page.social} />
            <Route exact path="/">
              <ProductHeroLayout backgroundClassName={classes.background}>
                {/* Increase the network loading priority of the background image. */}
                <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
                <Typography color="inherit" variant="h2" marked="center">
                  World Drag Racing Circuit
                </Typography>
              
                <Typography variant="body2" color="inherit" className={classes.more}>
                  Discover the experience
                </Typography>


              </ProductHeroLayout>
              
              <ProductCTA />
              <ProductValues />

            </Route>
            <Route exact path="/about" component={about} />
            <Route exact path="/schedule" component={schedule} />
            <Route exact path="/classes" component={classPage} />
            <Route exact path="/results" component={results} />
            <Route exact path="/gallery" component={gallery} />
            <Route exact path="/partners" component={partners} />
            <Route exact path="/shop" component={shop} />
            <Divider />
            <Footer sections={page.sections} social={page.social} /> 
          </Container>
        }
      </div>
      
      </>
    )
  }
}

export default withStyles(styles)(home);
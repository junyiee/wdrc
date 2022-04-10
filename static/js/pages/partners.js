import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import ProductHero from '../modules/views/ProductHero';
import Sponsors from '../modules/views/Sponsers';

const styles = (theme) => ({
});

class about extends Component {
  
  render() {
    return (
      <>
      <ProductHero />
      <Sponsors />
      </>
    )
  }
}

export default withStyles(styles)(about);
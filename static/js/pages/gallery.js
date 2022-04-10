import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Container from '@material-ui/core/Container';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    transform: 'translateZ(0)',
  },
  img: {
    width: '100%'
  }
});


const images = [
  {
    url:
      'https://storage.googleapis.com/flyers.worlddragracingcircuit.com/2021/2021-07-ALL_IN_ULTIMATE0.jpg',
    title: '',
    col: 12
  },
  {
    url:
      'https://storage.googleapis.com/flyers.worlddragracingcircuit.com/2021/thumb-600-2021-07-ALL_IN_ULTIMATE.jpg',
    title: '',
    col: 6
  },
  {
    url:
      'https://storage.googleapis.com/flyers.worlddragracingcircuit.com/2021/thumb-600-2021-07-ALL_IN_ULTIMATE2.jpg',
    title: '',
    col: 6
  },
  {
    url:
      'https://storage.googleapis.com/flyers.worlddragracingcircuit.com/2021/thumb-600-2021-07-ALL_IN_ULTIMATE-durango.jpg',
    title: 'East Coast Durangos',
    col: 6
  },
  {
    url:
      'https://storage.googleapis.com/flyers.worlddragracingcircuit.com/2021/thumb-600-2021-07-ALL_IN_ULTIMATE-WIM.jpg',
    title: 'Women in Motorsports',
    col: 6
  },

];

class home extends Component {
  
  render() {
    const { classes } = this.props;

    return (
    <Container className={classes.root} component="section">
      <GridList cellHeight={'auto'} className={classes.gridList} cols={12}> 
          {images.map((item) => (
            <GridListTile key={item.url}  cols={item.col || 1}>
              <img src={item.url} alt={item.title} className={classes.img} />
            </GridListTile>
          ))} 
        </GridList> 
    </Container>
    )
  }
}

export default withStyles(styles)(home);
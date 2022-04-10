import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ProductCTA from '../modules/views/ProductCTA';
import EventSeries from '../modules/views/EventSeries';
import SidebarSchedule from '../modules/views/SidebarSchedule';

import axios from 'axios';

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  mainGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
  image: {
    width: '100%',
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
    height: 137,
  },
  dateInfo: {
    fontSize: 14,
  }
});

class classes extends Component {
  state = {
    events: [],
    uiLoading: true,
  };
  
  componentWillMount = () => {
		// authMiddleWare(this.props.history);
		const authToken = localStorage.getItem('AuthToken');
		axios.defaults.headers.common = { Authorization: `${authToken}` };
		axios
			.get('/events')
			.then((response) => {
				this.setState({
          events: response.data.slice(0, 8),
          uiLoading: false
				});
			})
			.catch((error) => {
				console.log(error);
				this.setState({ errorMsg: 'Error in retrieving the data' });
			});
  };
  
  render() {
    const { classes } = this.props;

    return (
      <>
      <main>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Grid item xs={12} md={8}>
            
            <Typography variant="h1">
              Classes
            </Typography>

            <Divider />

            <Paper align="left" className={classes.mainGrid} elevation={3}>
            <h1>RACEWARS / WORLD DRAG RACING CIRCUIT</h1>
              <h2>2022 WDRC Racing Classes and Rules</h2>
            
              
            <b>For all World Drag Racing Circuit and 742 Racewars Events</b>
            <ol>
              <li>All classes are Import vs Domestic</li>
              <li>We do not run all the classes at all the tracks. We will advertise ahead of time which classes will be available at each location.</li>
              <li>All events are Hot Lap Test and Tune. WDRC created hot lap TEST AND TUNE/QUALIFYING to allow drivers the maximum amount of runs within a three-hour time frame before we start eliminations.</li>
            </ol>

            <b>TEST/TUNE QUALIFYING: </b>

            <ol>
              <li>Drivers will not be called to the lanes during this time frame, it is the drivers/ team responsibility to manage the cool down and service time to get all their runs in by the end of the allotted time.</li>
              <li>Every test and tune pass are a qualifying pass. </li>
              <li>All classes are random pairing, we do not do ladders.</li>
              <li><b>BUY BACKS</b>, we will choose the options based on track and time allowance. </li>
              <ul>
                <li><b>OPTION 1</b> First round buy backs will be put back into the second round of eliminations.  For championship classes you will not get points when you buy back in, you will be allowed to advance if you win and will get point only for rounds that you win.</li>
                <li><b>OPTION 2</b> Buy Backs will run 1 race, the winners of that race will be put back into the rounds. The buyback race will take place before second round of each class. </li>
              </ul>
              <li>WDRC follows NHRA Rules, all cars must be legal for their ET/MPH, all equipment must be up to date. Please refer to the NHRA rule book for further details. </li>
              <li>WDRC will run IHRA rules at IHRA tracks only. </li>
            </ol>
            <h3>QUARTER MILE RACING</h3>
            <b>HEADS UP CLASSES. <em>Imports and Domestics</em>  </b>
            <p>All formats FWD, RWD and AWD. No chassis restriction on turbo size or weight. No weight restriction, no power adder restriction. No electronics except where stated.
              <ul>
                <li>Car must run on DOT approved drag radials except FWD is allowed slicks. </li>
                <li>Car must be NHRA certified for the speed. Driver must have required NHRA License for 9.99 and faster if track requires it.</li>
                <li>All light duty full body trucks, no limits, and no restrictions</li>
              </ul>
            </p>
            <ol>
              <li><b>SFWD VS MODERN MUSCLE</b> <em>Heads up, Pro 400 tree Points Race</em>
                <p>
                  <ul>
                    <li>SFWD Pro cars VS Post 2008 and up Domestics and Imports</li>
                    <li>Older cars are allowed to run with the required safety equipment.</li>
                    <li>All cars must be factory body original suspension mounting points,  front end, full chassis or uni body race car.</li>
                    <li>This class will be a 32-car field qualifying class with a bump spot.</li>
                    <li>This is an open class for Domestics and Imports.  Minimum 32 car field for full payouts.</li>
                  </ul>
                </p>
              </li>
              <li><b>TRES QUATRO VS Outlaw</b>  <em>Heads-up Pro 400 tree</em>
                <p>
                  <ul>
                    <li>Power adders, small block, big block, Rotary, inline six or four cylinder engine. </li>
                    <li>Cars can be half backed or full tube chassis. </li>
                    <li>Must have working head lights and taillights.</li>
                    <li>All entries have the option to run either a 275 drag radial tire or 28inch by 10.6inch bias slick on any type of rear suspension.</li>
                    <li>This class will be a 32-car field qualifying class with a bump spot. </li>
                    <li>This is an open class for Domestics and Imports. Minimum 32 car field for full payouts.</li>
                  </ul> 
                </p>
              </li>
            </ol>
            

            <b>INDEX CLASS – 32 car field qualifier</b>
            <p>All formats FWD, RWD and AWD. No chassis restriction on turbo size or weight. No electronics. Car must run on DOT approved drag radials except FWD is allowed slicks. Car must be NHRA certified for the speed.</p>
            <ol>
              <li><b>10.50</b> <em>I2 Super Street SS Points Race</em>
                <p><ul>
                  <li>Full body only, interior is optional.</li>
                  <li>No tubs or halfback.</li>
                </ul>
                </p>
                
              </li>
              <li><b>11.50</b> <em>I3 Real Street RS Points Race</em>
                <p>
                  <ul>
                    <li>Full body and full interior.</li>
                  </ul>
                </p>
              </li>
            </ol>
            <b>BRACKET CLASSES – ¼ MILE</b>
            <p>All cars must meet NHRA/IHRA safety requirements. All bracket classes are open to all format cars, no weight restriction no tire restriction. This class is bases on Dial In and the computer calculates winner.</p>
            <ol>
              <li><b>Bracket 1</b> <em>Bk1 12.99 and faster Points Race (Extreme Bracket)</em>
              </li>
              <li><b>Bracket 2</b> <em>Bk2 13.00 and slower</em>
              </li>
            </ol>
            
            <b>BIKE CLASSES – ¼ MILE</b>
            <p>All riders must have full gear and leathers, no exception. Jeans may be allowed if tracks is ok with it, but must have full leather jacket, gloves and all other upper body safety gear.</p>
            <ol>
              <li><b>STREET ET</b> <em>Stock bikes only, no modification.</em>
                
              </li>
              <li><b>PRO STREET</b> <em>Modified bikes  Extended swing arm and power adders allowed</em>
              </li>
            </ol>
            
            </Paper>
            
          </Grid>

          <Grid item xs={12} md={4}>
          <Paper elevation={0} className={classes.sidebarAboutBox}>
            <Typography variant="h6">
                Schedule
            </Typography>
            <Divider />
            <Typography>
              &nbsp;
            </Typography>

            <SidebarSchedule events={this.state.events} />

          </Paper>
          </Grid>
        </Grid>
      </main>
      <Divider />
      <EventSeries />
      <Divider />
      <ProductCTA />
      
      </>
    )
  }
}

export default withStyles(styles)(classes);
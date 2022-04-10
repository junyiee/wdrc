import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// import axios from 'axios';
// import { authMiddleWare } from '../util/auth';

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  image: {
    height: 250,
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

class about extends Component {
  state = {
    events: [],
    uiLoading: true,
  };
  // https://www.spreadshirt.com/userarea/-C6840
  // api key 64a13c34-b523-4d8c-9c18-643ff0d8354d
  // secret 	17385378-7b68-4887-aafb-8410bcb43bec
  
  // componentWillMount = () => {
	// 	// authMiddleWare(this.props.history);
	// 	const authToken = localStorage.getItem('AuthToken');
	// 	axios.defaults.headers.common = { Authorization: `${authToken}` };
	// 	axios
	// 		.get('/events')
	// 		.then((response) => {
  //       console.log(typeof(response.data));
  //       console.log(response.data);
	// 			this.setState({
  //         events: response.data,
  //         uiLoading: false
	// 			});
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 			this.setState({ errorMsg: 'Error in retrieving the data' });
	// 		});
  // };
  
  render() {
    const { classes } = this.props;


    var js = document.createElement("script");
    js.type = "text/javascript";
    js.src = "https://shop.spreadshirt.no/shopfiles/shopclient/shopclient.nocache.js";
    document.body.appendChild(js);

    return (
      <>
      <main>
        <Grid container spacing={5} className={classes.mainGrid}>
          
          <Grid item xs={12}>
          <Paper elevation={0} className={classes.sidebarAboutBox}>
          <div className="shopBody">
              <div id="myShop">
                <i id="spinner" className="fa fa-spinner" aria-hidden="true"/>
                <p>Loading The Shop...</p>
              </div>
          </div>
      

          </Paper>
          </Grid>
        </Grid>
      </main> 
      
      </>
    )
  }
}

export default withStyles(styles)(about);
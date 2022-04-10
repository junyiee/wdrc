// Material UI components
import { React, Component } from 'react';
import { Route } from 'react-router-dom';
import clsx from 'clsx';
// import PropTypes from 'prop-types';
import { Button, Link, Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { TableHead, TableRow, TableBody, TableCell, TableContainer } from '@material-ui/core';
import { AppBar, IconButton, Table, Toolbar, Avatar} from '@material-ui/core';
// import Slide from '@material-ui/core/Slide';
import { Paper, Drawer } from '@material-ui/core';
import { Dialog, DialogActions, DialogContent } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { Menu, MenuItem } from '@material-ui/core';
import { Chip, Divider, Grid, TextField} from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import FacebookIcon from '@material-ui/icons/Facebook';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import RoomIcon from '@material-ui/icons/Room';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import GroupIcon from '@material-ui/icons/Group';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { DataGrid, gridColumnReorderDragColSelector } from '@mui/x-data-grid';

import { authMiddleWare } from '../util/auth';

import axios from 'axios';

/*
  TODO: add feature for linking to images on IG and FB via API
*/
	// const baseurl = "https://storage.googleapis.com/wdrc-flyers";
const cdn = "https://storage.googleapis.com/flyers.worlddragracingcircuit.com";
const drawerWidth = 240;
    //  "rgb(17, 82, 147)",
// TODO: clean up the unused classes in here
const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: theme.palette.secondary.main, 

  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    // marginRight: 36,
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  menuAction: {
    display: 'flex',
    marginLeft: 'auto',
  },
  media: {
    width: '100%'
  },
  mainGrid: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
    // paper: {
    // 	marginTop: theme.spacing(8),
    // 	display: 'flex',
    // 	flexDirection: 'column',
    //   alignItems: 'center',
    //   marginBottom: theme.spacing(30)
    // },
    // form: {
    // 	width: '100%',
    // 	marginTop: theme.spacing(1)
    // },
    // submit: {
    // 	margin: theme.spacing(3, 0, 2)
    // },
    customError: {
      color: 'red',
      fontSize: '0.8rem',
      marginTop: 10
    },
    // table: {
    //   minWidth: 700,
    // },
    // icon: {
    //   color: 'rgba(255, 255, 255, 0.54)',
    // },
  // titleBar: {
  //   background:
  //     'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
  //     'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  // },
    // navbarDisplayFlex: {
    //   display: `flex`,
    //   justifyContent: `space-between`
    // },
});


const StyledTableCell = withStyles((theme) => ({
  head: {
    // backgroundColor: "#78909c",
    // color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  },
}))(TableRow);


class admin extends Component {
  logoutHandler = (event) => {
		localStorage.removeItem('AuthToken');
		this.props.history.push('/login');
	};

	constructor(props) {
		super(props);

		this.state = {
      events: [],
      allEvents: [],
      venues: [],
      errors: [],
      buttonType: '',
      tabValue: 0,
      value: '',
      anchorEl: false,
      profileMenuOpen: Boolean(this.anchorEl),
      sidebarOpen: true
		};

		this.handleEditClickOpen = this.handleEditClickOpen.bind(this);
    // this.handleViewOpen = this.handleViewOpen.bind(this);
	}
	
	handleChange = (event) => {
    console.log(event.target);
		this.setState({
			[event.target.name]: event.target.value
		});
  };
  
  // changeTab = (event, newValue) => {
  //   console.log(newValue);
  //   if(newValue === 1){
  //     this.handleGetAllEvents();
  //   }
	// 	this.setState({  
  //     tabValue: newValue,
	// 		value: newValue
	// 	});
	// };
  
	componentDidMount = () => {
		const authToken = localStorage.getItem('AuthToken');localStorage.getItem('email');
		axios.defaults.headers.common = { Authorization: `${authToken}` };
    
		axios
			.get('/user')
			.then((response) => {
				this.setState({
					email: response.data.userCredentials.email,
					username: response.data.userCredentials.username,
          auth: true,
					uiLoading: false
				});
			})
			.catch((error) => {
				if (error.response.status === 403) {
          this.props.history.push('/');
				}
				this.setState({ errorMsg: 'Error in retrieving the data' });
      });

      this.handleGetNewEvents();
      this.handleGetAllEvents();
      // TODO venue endpoint is problematic
      // this.handleGetVenues();

	};

  handleGetNewEvents = () => {
    axios
    .get('/events')
    .then((response) => {
      this.setState({
        events: response.data
      });
    })
    .catch((error) => {
      console.log(error);
      this.setState({ errorMsg: 'Error in retrieving the data' });
    });
  };
  // TODO: to use for retrieving all events
	handleGetAllEvents = () => {
    axios
    .get('/events/all')
    .then((response) => {
      this.setState({ allEvents: response.data });
    })
    .catch((error) => {
      console.log(error);
      this.setState({ errorMsg: 'Error in retrieving the data' });
    });
  };

  handleGetVenues = () => {
    axios
    .get('/events/v')
    .then((response) => {
      let ve = new Array(response.data.length);
      // response.data.map(({venue_id, venue_name, venue_address, events }) =>  { 
      ve = response.data.map((item) =>  { 
        return { 
          vid: item.venue_id, 
          name: item.venue_name, 
          address: item.venue_address, 
          date: item.events.date };
      } );
        // item.event.map( e => e.date, e,id, e.title )

      
      this.setState({ venues: ve });
      console.log(this.state.venues);
    })
    .catch((error) => {
      console.log(error);
      this.setState({ errorMsg: 'Error in retrieving the data' });
    });
  };

  handleProfileMenuOpen = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
      profileMenuOpen: true
    });
  };

  handleProfileMenuClose = () => {
    this.setState({
      anchorEl: false,
      profileMenuOpen: false
    });
  };

  handleDrawer = (isOpen) => {
    this.setState({
      sidebarOpen: isOpen
    });
  };

  handleDrawerOpen = (event) => {
    this.setState({
      sidebarOpen: true
    });
  };

  handleDrawerClose = () => {
    this.setState({
      sidebarOpen: false
    });
  };

	handleEditClickOpen(data) {
    // console.log("ROW SELECTED: " + data.row.title, data.row.region );
    this.setState({
      active: true,
        eventId: data.row.eventId,
        title: data.row.title,
        date: data.row.date,
        flyer_img: data.row.flyer_img,
        facebook: data.row.facebook,
        tickets: data.row.tickets,
        region: data.row.region,
        pinned: data.row.pinned,
        venue_name: data.row.venue_name,
        venue_address: data.row.venue_address,
        description: data.row.description,
      buttonType: 'Edit',
      editFormOpen: true
    });
  }

	render() {

		const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;

      return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
          <Typography variant="h6">{children}</Typography>
          {onClose ? (
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
              <CloseIcon />
            </IconButton>
          ) : null}
        </MuiDialogTitle>
      );
    });
	
		const { classes } = this.props;
		const { errors } = this.state;


    const handleClickOpen = () => {
      this.setState({
        eventInfo: {
          title: '',
          date: new Date().toISOString(),
          flyer_img: '',
          facebook: '',
          description: '',
          tickets: '',
          region: '',
          buttonType: '',
          pinned: ''
        },
        editFormOpen: true
      });
    };

    const handleSubmit = (event) => {
      authMiddleWare(this.props.history);
      event.preventDefault();
      const eventData = {
            id: this.state.id,
            flyer_img: this.state.flyer_img,
						title: this.state.title,
						date: this.state.date,
            facebook: this.state.facebook,
            tickets: this.state.tickets,
            region: this.state.region,
            pinned: this.state.pinned,
            venue_name: this.state.venue_name,
            venue_address: this.state.venue_address,
            description: this.state.description
      };
      let options = {};
      if (this.state.buttonType === 'Edit') {
        options = {
          url: `/events/${this.state.eventId}`,
          method: 'put',
          data: eventData
        };
      } else {
        options = {
          url: '/event',
          method: 'post',
          data: eventData
        };
      }
      const authToken = localStorage.getItem('AuthToken');
      axios.defaults.headers.common = { Authorization: `${authToken}` };
      axios(options)
        .then(() => {
          this.setState({ editFormOpen: false });
          window.location.reload();
        })
        .catch((error) => {
          this.setState({ editFormOpen: true, errors: error.response.data });
          console.log(error);
        });
    };

		const handleClose = (event) => {
      this.setState({ editFormOpen: false });
    };

		const regionsDropdown = [
			{ value: '', label: 'Unknown'}
		, { value: 'east', label: 'East'}
		, { value: 'midwest', label: 'Midwest'}
		, { value: 'west', label: 'West'}
		, { value: 'intl', label: 'International'}
		, { value: 'all', label: 'All'}
		];

    const rows = this.state.events.map((item, index) => ( {
      id: index,
      date: new Date(item.date).toDateString(),
      event: item.title,
      venue: item.venue_name,
      region: item.region,
      fb: item.facebook || 'N/A',
      tix: item.tickets || 'N/A'
    } ));

    const columns = [
      // { field: 'id', headerName: 'ID', width: 20 },
      { field: 'date', headerName: 'Date', width: 150 },
      { field: 'event', headerName: 'Event', width: 300 },
      { field: 'venue', headerName: 'Venue', width: 200 },
      { field: 'region', headerName: 'Region', width: 100 },
      { field: 'fb', headerName: 'Facebook', width: 100, sortable: false },
      { field: 'tix', headerName: 'Tickets', width: 90, sortable: false },
    ];

		return (
      <>
      {/* Sent to home page if not logged in */}
      { !(this.state.auth) ? '' : 'Go to Login Page' }
      <div className={classes.root}>
      
      <AppBar position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: this.state.sidebarOpen,
              })}>
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, this.state.sidebarOpen && classes.hide)}
          >
            <MenuIcon />
          </IconButton>

        <Typography variant="h6" component="div" color="inherit">
          WDRC Event Admin Dashboard
        </Typography>
          
          {this.state.auth && (
            <div className={classes.menuAction} direction="row" spacing={1}>
              <Button
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
                edge="end"
                startIcon={<Avatar></Avatar>}
              >
                {this.state.username}
              </Button>
              <Menu
                anchorEl={this.state.anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={this.state.anchorEl}
                onClose={this.handleProfileMenuClose}
              >
                <MenuItem onClick={this.handleProfileMenuClose} disabled>Profile</MenuItem>
                <MenuItem onClick={this.handleProfileMenuClose} disabled>My account</MenuItem>
                <Divider light />
                <MenuItem key="Logout" onClick={this.logoutHandler}>Logout</MenuItem>
              </Menu>
            </div>
            )}

        </Toolbar>
      </AppBar>

        <Drawer
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: this.state.sidebarOpen,
            [classes.drawerClose]: !this.state.sidebarOpen,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: this.state.sidebarOpen,
              [classes.drawerClose]: !this.state.sidebarOpen,
            }),
          }}
          variant="permanent"
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            { [ {text:'Event Listing', icon: <DriveEtaIcon/>, url: '/admin'}
              , {text:'Venues', icon: <EmojiTransportationIcon/>, url: '/admin/venues'}
              , {text:'Calendar', icon: <RoomIcon/>, url: '/admin/calendar'}
              , {text:'Divider'}
              , {text:'All Events', icon: <AssignmentOutlinedIcon/>, url: '/admin/eventsAll'}
              , {text:'Gallery', icon: <PhotoLibraryIcon/>, url: '/admin/gallery'}
              , {text:'Users', icon: <GroupIcon/>, url: '/admin/users'}
              , {text:'Divider'}
            ].map((item, index) => ( item.text === 'Divider' ? <Divider />
              : 
              <ListItem button key={item.text} onChange={this.changeTab} 
                        value={this.state.tabValue}
                        selected={item.url === window.location.pathname ? true : false }
                        component="a"
                        href={item.url}
              >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          
          
          <List>
            {['Mailing List', 'Checklist'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <LocalActivityIcon /> : <StarIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            { [ {text:'TheFoat Tickets', icon: <LocalActivityIcon/>, url: "https://tickets.thefoat.com/Worlddragracingcircuit"}
              , {text:'RW Schedule', icon: <LocalActivityIcon/>, url: "https://racewarsusa.com/tour-dates-%26-tickets"}
              , {text:'WDRC Facebook Page', icon: <FacebookIcon/>, url: "https://www.facebook.com/worlddragracingcircuit/"}
              , {text:'EventBrite Tickets', icon: <LocalActivityIcon/>, url: "https://www.eventbrite.com/o/imm-entertainment-17027611729"}
              , {text:'Travel', icon: <GroupIcon/>}
            ].map((item, index) => (
              <ListItem button key={item.text}  component="a" href={item.url}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>
            Please note that none of the links on the left are working. Click a row below to edit information.
          </Typography>

          <Grid container spacing={5} className={classes.mainGrid}>
            <Grid item xs={12} >
              <Button
                  variant="contained"
                  className={classes.menuButton}
                  color="secondary"
                  aria-label="Add Event"
                  onClick={handleClickOpen}
                  startIcon={<AddCircleIcon style={{ fontSize: 20 }} />}
                >
                  Add Event
              </Button>
            </Grid>
          </Grid>

          <Divider/>

        <Route exact path="/admin">
          <Grid container spacing={5} className={classes.mainGrid}>
            <Grid item xs={12} md={12}>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table" size="small" >
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Date</StyledTableCell>
                      <StyledTableCell align="left">Title</StyledTableCell>
                      <StyledTableCell align="left">Venue</StyledTableCell>
                      <StyledTableCell align="center">Region</StyledTableCell>
                      <StyledTableCell align="center">Facebook</StyledTableCell>
                      <StyledTableCell align="center">Tickets</StyledTableCell>
                      {/* <StyledTableCell align="left">Flyer Name</StyledTableCell> */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {this.state.events.map((row) => (
                    <StyledTableRow key={row.eventId} onClick={() => this.handleEditClickOpen({ row })}>
                    <StyledTableCell align="left">{new Date(row.date).toDateString()}</StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      <Typography variant="subtitle2" gutterBottom>{row.title}</Typography>
                      { (row.pinned) ? <Chip icon={<StarIcon/>} label='pinned' color="secondary" size="small" variant="outlined" /> : ''}
                      <Typography variant="caption" display="block" gutterBottom>{row.description}</Typography>
                      <Typography variant="caption" color="secondary" gutterBottom>
                        <Link href={`${cdn}/${new Date(row.date).getFullYear()}/thumb-600-${row.flyer_img}`} 
                            component="button">
                        {row.flyer_img}</Link>
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Typography variant="subtitle2" gutterBottom>{row.venue_name}</Typography>
                      <Typography variant="caption" gutterBottom>
                      {row.venue_address}
                      </Typography>
                      
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.region}</StyledTableCell>
                    <StyledTableCell align="center">
                      { (row.facebook === "") ? "n/a" 
                      : <Link href={row.facebook}><FacebookIcon color="secondary" /></Link>
                      }
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      { (row.tickets === "") ? "n/a" 
                      : <Link href={row.tickets}><LocalActivityIcon color="secondary"/></Link>
                      }
                    </StyledTableCell>
                    {/* <StyledTableCell align="left">
                      <Link href={`${cdn}/${new Date(row.date).getFullYear()}/thumb-600-${row.flyer_img}`} 
                            component="button">
                      {row.flyer_img}
                      </Link>
                    </StyledTableCell> */}
                  </StyledTableRow>
                  ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Route>
        <Route exact path="/admin/eventsAll" >
          
          Results from  /events/all 

            {/* TODO: Use Data grid on the all events listing */}
            <Grid item xs={12} md={12}>
              <div style={{ height: 500, width: '100%' }}>
                <DataGrid rows={rows} 
                        checkboxSelection
                        disableSelectionOnClick
                        columns={columns} />
              </div>
            </Grid> 

        

          <Grid container spacing={5} className={classes.mainGrid}>
          <Grid item xs={12} md={12}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table" size="small" >
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Date</StyledTableCell>
                    <StyledTableCell align="left">Title</StyledTableCell>
                    <StyledTableCell align="center">Region</StyledTableCell>
                    <StyledTableCell align="center">Facebook</StyledTableCell>
                    <StyledTableCell align="center">Tickets</StyledTableCell>
                    {/* <StyledTableCell align="right">Flyer Name</StyledTableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                {this.state.allEvents.map((row) => (
                  <StyledTableRow key={row.eventId} onClick={() => this.handleEditClickOpen({ row })}>
                  <StyledTableCell align="left">{new Date(row.date).toDateString()}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.title} {' '}
                    { (row.pinned) ? <Chip icon={<StarIcon/>} label='pinned' color="secondary" size="small" variant="outlined" /> : ''}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.region}</StyledTableCell>
                  <StyledTableCell align="center">
                    { (row.facebook === "") ? "n/a" 
                    : <Link href={row.facebook}><FacebookIcon color="secondary" /></Link>
                    }
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    { (row.tickets === "") ? "n/a" 
                    : <Link href={row.tickets}><LocalActivityIcon color="secondary"/></Link>
                    }
                  </StyledTableCell>
                  {/* <StyledTableCell align="left">{row.flyer_img}</StyledTableCell> */}
                </StyledTableRow>
                ))}
                </TableBody>
              </Table>
            </TableContainer>

          </Grid>
          </Grid>
        </Route>
        <Route exact path="/admin/venues">
          venues
          <Grid item xs={12} md={12}>
              <div style={{ height: 500, width: '100%' }}>
                <DataGrid rows={rows} 
                        checkboxSelection
                        disableSelectionOnClick
                        columns={columns} />
              </div>
            </Grid> {this.state.venues}
{/*           
              {this.state.venues.map((item, index) => (
                {item} 
                //venue_name}
              ))} */}
              {/* <DataGrid {...this.state.venues}
                      checkboxSelection
                      disableSelectionOnClick  /> */} */}

  

        </Route>
        <Route exact path="/admin/calendar">
          Calendar
        </Route>
        <Route exact path="/admin/photos">
          Gallery

        </Route>
        <Route exact path="/admin/users">
          Users
        </Route>
        <Route exact path="/admin/other">
          Other
        </Route>
        </main>
        

        <Dialog open={this.state.editFormOpen} onClose={this.handleClose} 
                aria-labelledby="edit event listing" maxWidth="lg">
            <DialogTitle>
                {this.state.buttonType === 'Edit' ? 'Edit Event' : 'Add Event'}
            </DialogTitle>
            <Divider />
            <DialogContent dividers>

              <form className={classes.form} noValidate> 
              {/* key="myform"> */}
                <Grid container spacing={2}>
                  <Grid item xs={6}> 
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="dateOfEvent"
                    name="date"
                    label="Date"
                    helperText={errors.date}
                    value={this.state.date}
                    error={errors.date ? true : false}
                    onChange={this.handleChange}
                    margin="normal"
                  />
                  </Grid>
                  <Grid item xs={4}>
                  <TextField
                    variant="outlined"
                    id="region"
                    select
                    fullWidth
                    name="region"
                    label="Geographic Region"
                    value={this.state.region}
                    onChange={this.handleChange}
                    margin="normal"
                  >
                    {regionsDropdown.map((option) => (
                      <MenuItem value={option.value} key={option.value} name={option.label}>{option.label}</MenuItem>
                    ))}

                  </TextField>
                  </Grid>
                  <Grid item xs={2}> 
                    <FormControlLabel
                      control={
                        <Checkbox
                        checked={this.state.pinned}
                          onChange={(e) => this.setState({ pinned: e.target.value })}
                          name="checkedB"
                          color="primary"
                        />
                      }
                      label="Pin to top"
                    />
                </Grid>

                <Grid item xs={8}> 
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="eventTitle"
                    label="Event Title"
                    name="title"
                    helperText={errors.title}
                    error={errors.title ? true : false}
                    onChange={this.handleChange}
                    value={this.state.title}
                    margin="normal"
                    autoComplete="title"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    multiline
                    maxRows="6"
                    rows={4}
                    id="description"
                    label="Description"
                    helperText={errors.description}
                    error={errors.description ? true : false}
                    onChange={this.handleChange}
                    value={this.state.description}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="venue_name"
                  label="Venue Name"
                  name="venue_name"
                  autoComplete="venue_name"
                  helperText={errors.venue_name}
                  error={errors.venue_name ? true : false}
                  onChange={(e) => this.setState({ venue_name: e.target.value })}
                  value={this.state.venue_name}
                  margin="normal"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="venue_address"
                  label="Venue Address"
                  name="venue_address"
                  autoComplete="venue_address"
                  multiline
                  helperText={errors.venue_address}
                  error={errors.venue_address ? true : false}
                  onChange={(e) => this.setState({ venue_address: e.target.value })}
                  value={this.state.venue_address}
                  margin="normal"
                /> 
                </Grid>
                <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="facebook"
                  label="Facebook Page"
                  name="facebook"
                  autoComplete="facebook"
                  helperText={errors.facebook}
                  error={errors.facebook ? true : false}
                  onChange={this.handleChange}
                  value={this.state.facebook}
                  margin="normal"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="tickets"
                  label="Ticket Page"
                  name="tickets"
                  autoComplete="tickets"
                  helperText={errors.tickets}
                  error={errors.tickets ? true : false}
                  onChange={this.handleChange}
                  value={this.state.tickets}
                  margin="normal"
                />
                </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Grid item xs={12}>
                    <Paper>
                      <img src={`${cdn}/${new Date(this.state.date).getFullYear()}/thumb-600-${this.state.flyer_img}`}  
                            alt={"Preview"} className={classes.media} />
                    </Paper>
                    
                  </Grid>
                  <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="flyer_img"
                    label="Flyer FileName"
                    name="flyer_img"
                    autoComplete="flyer_img"
                    helperText={errors.flyer_img}
                    error={errors.flyer_img ? true : false}
                    onChange={(e) => this.setState({ flyer_img: e.target.value })}
                    value={this.state.flyer_img}
                    margin="normal"
                  />
                  </Grid>
                </Grid>	
                
                
              </Grid>
              </form>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                    autoFocus
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    {this.state.buttonType === 'Edit' ? 'Save' : 'Submit'}
                  </Button>
              </DialogActions>
        </Dialog>
      
      
      </div>
      
      </>
		);
	}
}

export default withStyles(styles)(admin);

class Square extends Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}
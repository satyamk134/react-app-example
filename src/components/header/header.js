import React ,{ useState, useEffect, useCallback }  from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolBar:{
    minHeight:'8vh'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const  Header = () => {
  const classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    //checking if token is present in localStorage
    console.log("localStorage.getItem('token') ",localStorage.getItem('token') )
    if(localStorage.getItem('token') == 'undefined' || !localStorage.getItem('token') )
    {
      console.log("invalid token")
    }else{
      console.log("user is logged in with valid token")
    }
   
  });

 
  const handleClick = useCallback(() => {
    history.push('/login')
  })


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            MyApp
          </Typography>
          <Button color="inherit">menu</Button>
          <Button onClick = {handleClick} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const getLoginStatus = status =>console.log("status is",status)

const mapStateToProps = state => {
  console.log("map state inside visible to do list",state)
  return ({
  status: getLoginStatus(state.userStatus)
})}

export default connect(
  mapStateToProps
)(Header)







import React, { Children } from 'react'
import { connect } from 'react-redux'
import { setUserLoginStatus } from '../actions/index'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
const loggedIn = false;

const checkIfTokenValid = () => {
    ////console.log("came to check token")
    if(localStorage.getItem('token') == 'undefined' || !localStorage.getItem('token') )
    {
      //console.log("invalid token");
      return false;
    }else{
      //console.log("user is logged in with valid token");
      //setUserLoginStatus
      return true;
    }
}
const PrivateRoute = ({component:Component,bordcastLogin, ...rest})=>{
    //console.log("came inside private route===>",Component);
    //console.log("came inside private route",Children);
    if(checkIfTokenValid() == true){
        bordcastLogin(false);
    } 
    return <Route
    {...rest}
    render={({ location,props }) =>
    checkIfTokenValid() == true? (

        <Component props={props}/>
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: location }
          }}
        />
      )
    }
  />
}

const getLoginStatus = status =>console.log("status is",status)



const mapDispatchToProps = dispatch => {
    
    return ({
        bordcastLogin: status => dispatch(setUserLoginStatus(status))
})}

export default connect(
   null,mapDispatchToProps
)(PrivateRoute)

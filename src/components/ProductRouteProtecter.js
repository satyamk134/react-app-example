import React  from 'react'
import {Route,Redirect} from "react-router-dom";

const checkIfRoleIsCustomer = ()=>{
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if(userInfo.role === 'customer'){
        return true
    }
    localStorage.removeItem('token');

    return false
}

const ProductRouteProtector = ({children,...rest})=>{
   
   return (
    <Route
      {...rest}
      render={({ location }) =>
      checkIfRoleIsCustomer() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}




export default ProductRouteProtector

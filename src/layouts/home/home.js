import React from "react";
import login from '../../components/login/login'
import Header  from '../../components/header/header'
import { Route, Link, BrowserRouter as Router , Switch} from 'react-router-dom';
import NotFound from '../../components/NotFound'
import Dashboard from "../../components/dashboard/dashboard";
function HomeLayout() {
    console.log("this is home layout component");
    return (
    <Router>
        <Header />
        <Switch>
            <Route  path='/' component={login} /> 
            <Router path="/dashboard" component={Dashboard} />
            <Route path="*" component={NotFound}/>
            
        </Switch>
        
        
    </Router>
    )
}

export default HomeLayout;

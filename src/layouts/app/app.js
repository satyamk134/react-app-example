import React from "react";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from '../../components/dashboard/dashboard'


function AppLayout() {
    console.log("this is app layout component");
    return (
        <Router>
            
            <Route  path='/' component={Dashboard} />

        </Router>)
}



export default AppLayout

import React from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Dashboard from '../../components/dashboard/dashboard'
import Header from '../../components/header/header'

function AppLayout() {
    console.log("this is app layout component");
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/' component={Dashboard} />
            </Switch>
        </div>

    )
}



export default AppLayout

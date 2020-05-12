import React from "react";
import login from '../../components/login/login'
import Header  from '../../components/header/header'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
function HomeLayout() {
    console.log("this is home layout component");
    return (
    <Router>
        <Header />
        <Route exact path='/' component={login} />
    </Router>)
}

export default HomeLayout;

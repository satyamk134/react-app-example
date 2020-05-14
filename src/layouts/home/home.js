import React from "react";
import login from '../../components/login/login'
import Header from '../../components/header/header'
import {RegisterComp} from '../../components/Register'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
function HomeLayout() {
    console.log("this is home layout component");
    const menu = ['Home']
    return (
        <div>
            
            <Header />
            <Switch>
                {/* <Route exact path='/' component={login} /> */}
                <Route exact path='/' component={login} />
                <Route exact path='/login' component={login} />
                <Route path="/login/?id" component={login} />
                <Route path='/login/register' component={RegisterComp} />
            </Switch>
        </div>
        

    )
}

export default HomeLayout;

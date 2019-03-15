import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'


import Index from '../../routes/index';  //首页
import UserList from '../../routes/userlist';  //首页


class Rts extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ Index } />
                <Route exact path="/userlist" component={ UserList } />
                <Redirect from="*" to="/" />
            </Switch>
        );
    }
}

export default Rts;
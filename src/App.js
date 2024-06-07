import React from 'react';
import {Router, Route, Switch } from 'react-router-dom';
import Form from './validation/Form';
import Success from './validation/Success';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Form} />
                <Route path="/success" component={Success} />
            </Switch>
        </Router>
    );
};

export default App;

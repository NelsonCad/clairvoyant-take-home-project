import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'antd/dist/antd.css';
import Dashboard from './pages/Dasboard';

function App () {
    return (
        <Router>
            <Route exact path="/" component={Dashboard} />
        </Router>
    )
}


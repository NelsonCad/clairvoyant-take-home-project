import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'antd/dist/antd.css';
import Dashboard from './pages/Dasboard';
import Sources from './pages/sources';
import Navbar from './components/Navbar';

function App () {
    return (
        <Router>
            <Navbar />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/sources" component={Sources} />
        </Router>
    );
};

export default App;
import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import API from "../utils/API";
import {
    Col,
    Row
} from 'antd'
import Infocell from './../components/Infocell';

function Dashboard() {

    const [call, setCall] = useState(true);
    const [info, setInfo] = useState({});

    useEffect(() => {
        API.getInfo()
            .then(res => setInfo(res.data))
            .then(()=> setCall(false))
            .then(() => console.log(info))
            .catch(err => console.log(err));
    }, [call]);

    return (
        <div>
            <Row>
                {/* stackedcolumn2d */}
            </Row>

            <Row>
                <Col></Col>
                <Col></Col>
            </Row>

            <Row>
                {info.TinyGraphs.map(chartInfo => (
                    <Infocell
                        
                    />
                ))

                }
            </Row>

        </div>
    );
};

export default Dashboard;
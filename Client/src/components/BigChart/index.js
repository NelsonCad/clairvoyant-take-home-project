import React from 'react';
import { 
    BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend 
} from 'recharts';
// import "Infocell.css";
import { Card } from 'antd';



// imagine, if you will, a situation wherein i wrote the bulk of this song at 4 am and then woke up only to discover the monstrosity i had created in my fleeting hubris
function BigChart(props) {
    return (
        <Card title={props.title}>
            <BarChart width={props.width} height={props.height} data={props.data}
            margin={{top: 20, right: 20, left: 20, bottom: 5}} 
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="swift_code" stackId="a" fill="#8884d8" />
                <Bar dataKey="email" stackId="a" fill="#82ca9d" />
                <Bar dataKey="US_Bank_Acc_Num" stackId="a" fill="#829ca3" />
                <Bar dataKey="Phone" stackId="a" fill="#81f655" />
                <Bar dataKey="SSN" stackId="a" fill="#8ac130" />
                <Bar dataKey="US_Passport" stackId="a" fill="#841342" />
                <Bar dataKey="ABA_Routing" stackId="a" fill="#844117" />
                <Bar dataKey="DOB" stackId="a" fill="#8facad" />
                <Bar dataKey="Credit_Card" stackId="a" fill="#8aff1e" />

            </BarChart>
        </Card>
    );
};

export default BigChart;
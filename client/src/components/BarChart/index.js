import React from 'react';
import { 
    BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend } from 'recharts'

function Barchart(props) {

    return (
        <BarChart layout="vertical" width={250} height={275} data={props.data}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number"/>
            <YAxis type="category" dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
    )
}

export default Barchart;
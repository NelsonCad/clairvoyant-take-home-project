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

function StackedChart(props) {
    return (
        <BarChart layout="vertical" width={250} height={275} data={props.data}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="class1" stackId="a" fill="#8884d8" />
            <Bar dataKey="class2" stackId="a" fill="#81eed5"/>
            <Bar dataKey="class3" stackId="a" fill="#8ea75a"/>
        </BarChart>
    )
}

export default StackedChart;
import React from 'react';
import ReactFC from 'react-fusioncharts';
import Charts from "fusioncharts/fusioncharts.charts"
import FusionCharts from 'fusioncharts'
// import "Infocell.css";
import { Card } from "antd";
// import './../chartConfig'

ReactFC.fcRoot(FusionCharts, Charts);

// imagine, if you will, a situation wherein i wrote the bulk of this song at 4 am and then woke up only to discover the monstrosity i had created in my fleeting hubris
function Infocell(props) {
    return (
        <div>
            <Card title={props.title} extra={<a href="#">More</a>} style={{ width: 300 }}>
                <ReactFC
                    type={props.type}
                    //scrollbar2d
                    //bar2d
                    //doughnut2d
                    width={props.width}
                    height={props.height}
                    dataFormat="JSON"
                    dataSource={props.data}
                />
            </Card>
        </div>
    );
};

export default Infocell;
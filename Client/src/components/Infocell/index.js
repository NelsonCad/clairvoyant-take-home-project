import React from 'react';
import ReactFC  from 'react-fusioncharts';
import FusionCharts from 'fusioncharts'
import 'Infocell.css';
// import './../chartConfig'

charts(FusionCharts);

function Infocell() {
    return (
        <div>
            <Card title={props.title} extra={<a href="#">More</a>} style={{ width: 300 }}>
                <ReactFC
                    type={props.type}
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
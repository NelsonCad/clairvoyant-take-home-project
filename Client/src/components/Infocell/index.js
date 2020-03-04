import React from 'react';
import ReactFC  from 'react-fusioncharts';
import FusionCharts from 'fusioncharts'
import 'Infocell.css';
// import './../chartConfig'

charts(FusionCharts);

// imagine, if you will, a situation wherein i wrote the bulk of this song at 4 am and then woke up only to discover the monstrosity i had created in my fleeting hubris
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
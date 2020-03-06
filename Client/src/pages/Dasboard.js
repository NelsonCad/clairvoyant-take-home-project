import React, {
    // useState, 
    // useEffect 
} from 'react';
import './Dashboard.css';
import {
    Layout,
    Col,
    Row
} from 'antd'
import ChartData from './../components/infoDataTonic';
import Overview from './../components/Overview';
import BigChart from './../components/BigChart';
import Infocell from './../components/Infocell';
import DonutChart from './../components/DonutChart';
// import API from "../utils/API";

const { Content } = Layout;
const piecharts = ChartData.tinyGraphs.DonutCharts;
const barCharts = ChartData.tinyGraphs.BarCharts;

function Dashboard() {



    return (
        <div>
            <Layout>

                <Overview />

                <Content>
                    <Row>
                        <Col span={16} >
                            <BigChart
                                key={ChartData.dataDistChart.key}
                                title={ChartData.dataDistChart.title}
                                width={ChartData.dataDistChart.width}
                                height={ChartData.dataDistChart.height}
                                data={ChartData.dataDistChart.dataset}
                            />
                        </Col>
                    </Row>

                    <Row gutter={[16, 16]} justify="center">
                        {piecharts.map(donut => (
                            <Col span={8} key={donut.key}>
                                <Infocell title={donut.title}>
                                    <DonutChart
                                        key={donut.key}
                                        data={donut.data}
                                        width={donut.width}
                                        height={donut.height}
                                    />
                                </Infocell>
                            </Col>
                        ))}

                        <Col span={8}>
                            <Infocell title={barCharts[0].title}>

                            </Infocell>
                        </Col>

                    </Row>
                </Content>
            </Layout>
        </div>
    );
};

export default Dashboard;
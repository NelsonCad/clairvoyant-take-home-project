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
import Infocell from './../components/Infocell';
import Overview from './../components/Overview';
import BigChart from './../components/BigChart';
import Notifs from './../components/Notifs';
import DonutChart from './../components/DonutChart';
import Barchart from './../components/BarChart';
import StackedChart from './../components/StackedChart';

const { Content } = Layout;
let piecharts = ChartData.tinyGraphs.DonutCharts;
let barCharts = ChartData.tinyGraphs.BarCharts;
let stackedCharts = ChartData.tinyGraphs.StackedBars;


function Dashboard() {

    return (
        <div>
            <Layout>

                <Overview />

                <Content>
                    <Row gutter={[16, 16]} justify="center">
                        <Col span={16} >
                            <BigChart
                                key={ChartData.dataDistChart.key}
                                title={ChartData.dataDistChart.title}
                                width={ChartData.dataDistChart.width}
                                height={ChartData.dataDistChart.height}
                                data={ChartData.dataDistChart.dataset}
                            />
                        </Col>

                        <Col span={8} className="notifications">
                            <Infocell title="Notifications">
                                <Notifs />
                            </Infocell>
                        </Col>
                    </Row>

                    <Row gutter={[16, 16]} justify="center">
                        {piecharts.map(donut => (
                            <Col span={7} key={donut.key}>
                                <Infocell title={donut.title}>
                                    <DonutChart
                                        key={donut.key}
                                        data={donut.data}
                                    />
                                </Infocell>
                            </Col>
                        ))}

                        {barCharts.map(bars => (
                            <Col span={7} key={bars.id}>
                                <Infocell title={bars.title}>
                                    <Barchart
                                        data={bars.data}
                                    />
                                </Infocell>
                            </Col>
                        ))}

                        {stackedCharts.map(stack => (
                            <Col span={7} key={stack.id}>
                                <Infocell title={stack.title}>
                                    <StackedChart 
                                    data={stack.data}
                                    />
                                </Infocell>
                            </Col>
                        ))}

                    </Row>
                </Content>
            </Layout>
        </div>
    );
};

export default Dashboard;
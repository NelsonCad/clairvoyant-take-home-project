import React, {
    useState,
    useEffect
} from 'react';
import './Dashboard.css';
import {
    Layout,
    Col,
    Row
} from 'antd';
import axios from 'axios';
import Infocell from './../components/Infocell';
import Overview from './../components/Overview';
import BigChart from './../components/BigChart';
import Notifs from './../components/Notifs';
import DonutChart from './../components/DonutChart';
import Barchart from './../components/BarChart';
import StackedChart from './../components/StackedChart';

const { Content } = Layout;

function Dashboard() {

    const [chartData,setChartData] = useState({});

    const [pies, setPies] = useState([]);
    const [bars, setBars] = useState([]);
    const [stacks, setStacks] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await axios(
                '/api',
            );
    
            setChartData(result.data.dataDistChart)
            setPies(result.data.tinyGraphs.DonutCharts);
            setBars(result.data.tinyGraphs.BarCharts);
            setStacks(result.data.tinyGraphs.StackedBars)
        };
        getData();
    },[]);

    return (
        <div>
            <Layout>

                <Overview />

                <Content>
                    <Row gutter={[16, 16]} justify="center">
                        <Col span={15} >
                            <BigChart
                                key={chartData.key}
                                title={chartData.title}
                                width={chartData.width}
                                height={chartData.height}
                                data={chartData.dataset}
                            />
                        </Col>

                        <Col span={8} className="notifications">               
                                <Notifs />
                        </Col>
                    </Row>

                    <Row gutter={[16, 16]} justify="center">
                        {pies.map(donut => (
                            <Col span={7} key={donut.key} >
                                <Infocell title={donut.title} className="tinyGraph">
                                    <DonutChart
                                        key={donut.key}
                                        data={donut.data}
                                    />
                                </Infocell>
                            </Col>
                        ))}

                        {bars.map(bars => (
                            <Col span={7} key={bars.id} >
                                <Infocell title={bars.title} className="tinyGraph">
                                    <Barchart
                                        data={bars.data}
                                    />
                                </Infocell>
                            </Col>
                        ))}

                        {stacks.map(stack => (
                            <Col span={7} key={stack.id} >
                                <Infocell title={stack.title} className="tinyGraph">
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
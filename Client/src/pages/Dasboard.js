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
// import API from "../utils/API";
import BigChart from './../components/BigChart';
import Overview from './../components/Overview'

const { Content } = Layout;

function Dashboard() {

    // const [call, setCall] = useState(false);
    // const [totalInfo, setTotalInfo] = useState({});
    // const [overviewInfo, setOverviewInfo] = useState({});
    // const [distChartInfo, setDistChartInfo] = useState({});
    // const [tinyGraphInfo, setTinyGraphInfo] = useState([]);

    // useEffect(() => {

    //     async function fetchInfo() {
    //         let fetcher = await window.fetch("/api/info")
    //         let result = await fetcher.json()
    //         setTotalInfo(result)

    //         setCall(false);
    //         console.log(totalInfo)
    //     };
    //     fetchInfo();

    //     .then(() => setOverviewInfo(totalInfo.overview))
    //     .then(() => setDistChartInfo(totalInfo.dataDistChart))
    //     .then(() => setTinyGraphInfo(totalInfo.tinyGraphs))

    // }, [call]);

    // let tinyGraphs = ChartData.tinyGraphs

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

                    <Row>
                        {/* {tinyGraphInfo.map(chartInfo => (
                    <Infocell
                        type={chartInfo.type}
                        width={chartInfo.width}
                        height={chartInfo.height}
                        dataSource={chartInfo.info}
                    />
                    ))}; */
                        }

                    </Row>
                </Content>
            </Layout>
        </div>
    );
};

export default Dashboard;
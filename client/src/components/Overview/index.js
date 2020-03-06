import React from 'react';
import {
    Row,
    Col,
    Card
} from 'antd'
import ChartData from './../infoDataTonic';
import './Overview.css';

const issuesResolved = ChartData.overview.issuesResolved;
const inspectionCoverage = ChartData.overview.inspectionCoverage;
const sensitiveDataLocations = ChartData.overview.sensitiveDataLocations;

function Overview() {
    return (
        <div className="site-card-wrapper">
            <Row gutter={[16, 16]} justify="center">
                <Col span={4}>
                    <Card title={issuesResolved.title} bordered={false}>
                        {issuesResolved.amount}
                    </Card>
                </Col>
                <Col span={10}>
                    <Card title={inspectionCoverage.title} bordered={false}>

                        <div className="inline coverage">
                            <p>{inspectionCoverage.databases.current}/{inspectionCoverage.databases.total}</p>
                            <p>{inspectionCoverage.databases.title}</p>
                        </div>

                        <div className="inline coverage">
                            <p>{inspectionCoverage.tables.current}/{inspectionCoverage.tables.total}</p>
                            <p>{inspectionCoverage.tables.title}</p>
                        </div>

                        <div className="inline coverage">
                            <p>{inspectionCoverage.files.current}/{inspectionCoverage.files.total}</p>
                            <p>files</p>
                        </div>

                    </Card>
                </Col>
                <Col span={9}>
                    <Card title={sensitiveDataLocations.title} bordered={false}>
                        <div className="inline location">
                            <p>{sensitiveDataLocations.dataSources}</p>
                            <p>Sources</p>
                        </div>

                        <div className="inline location">
                            <p>{sensitiveDataLocations.databases}</p>
                            <p>Databases</p>
                        </div>

                        <div className="inline location">
                            <p>{sensitiveDataLocations.tables}</p>
                            <p>Tables</p>
                        </div>

                        <div className="inline location">
                            <p>{sensitiveDataLocations.files}</p>
                            <p>Files</p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Overview;
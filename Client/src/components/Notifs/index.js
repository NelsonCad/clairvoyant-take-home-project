import React, { useState } from 'react';
import { Menu, Card } from 'antd';
import ChartsData from "./../infoDataTonic";

const Notes = ChartsData.notifications;

function Notifs() {

    const [current, setCurrent] = useState("all");
    // const [term, setTerm] = useState("all");
    // const [list, setList] = useState([]);

    function handleClick(e) {
        setCurrent(e.key);
    }

    return (
        <div>
            <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
                <Menu.Item key="all" >
                    All
                </Menu.Item>

                <Menu.Item key="critical">
                    Critical
                </Menu.Item>

                <Menu.Item key="warn" >
                    Warn
                </Menu.Item>

                <Menu.Item key="info" >
                    Info
                </Menu.Item>
            </Menu>

            {current === "all" ? (
                Notes.map(note => (
                    <Card>
                        <h3>{note.title}</h3>
                        <p>{note.time}</p>
                        <p>{note.description}</p>
                    </Card>
                )))
                : (
                    Notes.filter(note => note.tag === current).map(note => (
                        <Card>
                            <h3>{note.title}</h3>
                            <p>{note.time}</p>
                            <p>{note.description}</p>
                        </Card>
                    )))}
        </div>
    )
}

export default Notifs;
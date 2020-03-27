import React, { useState, useEffect } from 'react';
import { Menu, Card } from 'antd';
import axios from 'axios';
import './Notifs.css'

function Notifs() {

    const [current, setCurrent] = useState("all");
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await axios(
                '/api',
            );
            setNotes(result.data.notifications);
        };
        getData();
    },[]);

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

            <Card className="holder">

                {current === "all" ? (
                    notes.map(note => (
                        <Card key={note.id}>
                            <h3>{note.title}</h3>
                            <p>{note.time}</p>
                            <p>{note.description}</p>
                        </Card>
                    )))
                    : (
                        notes.filter(note => note.tag === current).map(note => (
                            <Card key={note.id}>
                                <h3>{note.title}</h3>
                                <p>{note.time}</p>
                                <p>{note.description}</p>
                            </Card>
                        )))}
            </Card>
        </div>
    )
}

export default Notifs;
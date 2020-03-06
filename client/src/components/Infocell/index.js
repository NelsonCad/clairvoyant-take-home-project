import React from 'react';
// import "Infocell.css";
import { Card } from 'antd';

// imagine, if you will, a situation wherein i wrote the bulk of this song at 4 am and then woke up only to discover the monstrosity i had created in my fleeting hubris
function Infocell(props) {
    return (
        <Card title={props.title}>
            {props.children}
        </Card>
    );
};

export default Infocell;
import React from 'react';
import { Wrapper } from './dateStatus.styles';

const DataStatus: React.FC = () => {
    return (
        <Wrapper>
            <div className="day">{new Date().getDate()}</div>
            <div>
                <div className="month">{months[new Date().getMonth()]}</div>
                <p className="status">available for work</p>
            </div>
        </Wrapper>
    );
};

export default DataStatus;

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

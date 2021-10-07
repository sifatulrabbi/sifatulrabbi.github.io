import React from 'react';
import { Wrapper } from './dateStatus.styles';

// prettier-ignore
const months = [ 'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec',];

const DataStatus: React.FC = () => {
    const date = (): string => {
        const defaultDate = new Date().getDate();

        return defaultDate < 10 ? `0${defaultDate}` : `${defaultDate}`;
    };

    return (
        <Wrapper>
            <div className='day'>{date()}</div>
            <div>
                <div className='month'>{months[new Date().getMonth()]}</div>
                <p className='status'>available for work</p>
            </div>
        </Wrapper>
    );
};

export default DataStatus;

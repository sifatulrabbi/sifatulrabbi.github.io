import React from 'react';

const Title = ({ title }) => {
    const newTitle = title.split(' ');
    const watermark = newTitle[newTitle.length - 1];

    return (
        <div className="title">
            <span className="title_text">{title}</span>
            <span className="title_watermark">{watermark}</span>
        </div>
    );
};

export default Title;

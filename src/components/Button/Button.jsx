import React from 'react';

const Button = ({ text, big, label, onClick }) => {
    return (
        <button
            className={text ? 'button text' : big ? 'button big' : 'button'}
            onClick={() => onClick()}
        >
            <span className="button_label">{label}</span>
        </button>
    );
};

export default Button;

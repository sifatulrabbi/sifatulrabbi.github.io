import React from 'react';

const Button = ({ text, big, label }) => {
  return (
    <button className={text ? 'button text' : big ? 'button big' : 'button'}>
      <span className="button_label">{label}</span>
    </button>
  );
};

export default Button;

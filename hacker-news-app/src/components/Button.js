import React from 'react';

const Button = ({ onClick, type='button', children, className }) =>
    <button 
        type={type}
        className={className}
        onClick={onClick}
        >
        {children} 
    </button>;

export default Button;
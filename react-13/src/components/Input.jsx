import React from 'react';

const Input = ({ className ,placeholder }) => {
    return (
        <input type="text" className={className} placeholder={placeholder} />
    );
}

export default Input;

import React from 'react';
import './Input.module.css'

const Input = React.forwardRef((props, ref) => {
    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    );
})

export default Input;
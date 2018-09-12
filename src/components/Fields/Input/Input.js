import React from 'react'

import classes from './Input.css'
import style from '../../Form/FormError/FieldError.css'

const Input = ({
                   type,
                   name,
                   required,
                   error,
                   placeholder,
                   validators,
                   value,
                   onChange
               }) => {
    const inputBorderColor = error ? style.ErrorBorderColor : classes.StandardInputBorderColor;
    return (
        <input
            type={type}
            name={name}
            value={value}
            id={name}
            className={[classes.Input, inputBorderColor].join(' ')}
            placeholder={placeholder}
            onChange={(event) => onChange({event, required, validators})}/>
    );
};

export default Input;
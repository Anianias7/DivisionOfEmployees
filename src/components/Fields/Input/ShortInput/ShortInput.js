import React from 'react'
import classes from './ShortInput.css'
import style from '../../../FormError/FieldError.css'

const ShortInput = ({
                        type,
                        name,
                        required,
                        error,
                        placeholder,
                        onChange,
                        onKeyPress,
                        value
                    }) => {
    const inputBorderColor = error ? style.ErrorBorderColor : classes.ShortInputBorderColor;
    return <input
        type={type}
        name={name}
        id={name}
        value={value}
        className={[classes.ShortInput, inputBorderColor].join(" ")}
        placeholder={placeholder}
        onChange={(event) => onChange({event, required})}/>
};

export default ShortInput;
import React from 'react'

import classes from './Button.css'

const Button = ({
                    text,
                    type,
                    onClick
                }) => {
    const classType = type === 'submit' ? classes.SubmitButton : classes.OptionButton;
    return <button className={[classes.Button, classType].join(' ')}
                   onClick={onClick}>
        {text}
    </button>
};

export default Button;
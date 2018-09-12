import React from 'react'

import classes from './Button.css'

const Button = ({
                    text,
                    type
                }) => {
    const classType = type === 'submit' ? classes.SubmitButton : classes.OptionButton;
    return <button className={[classes.Button, classType].join(' ')}>
        {text}
    </button>
};

export default Button;
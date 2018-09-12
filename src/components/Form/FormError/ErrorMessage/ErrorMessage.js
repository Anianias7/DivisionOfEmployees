import React from 'react'

import classes from './ErrorMessage.css'

const ErrorMessage = ({
                          name,
                          validators,
                          error
                      }) => {
    const message = validators ? validators[0] : `Pole jest wymagane`;
    return (
        error ? <div className={classes.ErrorMessage}>
            {message}
        </div> : null
    );
};

export default ErrorMessage;
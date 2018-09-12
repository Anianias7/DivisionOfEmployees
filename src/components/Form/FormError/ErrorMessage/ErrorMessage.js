import React from 'react'

import classes from './ErrorMessage.css'
import utils from '../../../../utils'

const ErrorMessage = ({
                          name,
                          validators,
                          error
                      }) => {
    const message = validators ? validators[0] : `${utils.capitalizeFirstLetter(name)} jest wymagane`;
    return (
        error ? <div className={classes.ErrorMessage}>
            {message}
        </div> : null
    );
};

export default ErrorMessage;
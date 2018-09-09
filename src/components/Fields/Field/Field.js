import React from 'react';
import classes from './Field.css'

const Field = ({
                   children
               }) => {
    return (
        <div className={classes.FieldStyle}>
            {children}
        </div>
    );
};

export default Field;
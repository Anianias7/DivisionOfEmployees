import React from 'react'
import classes from './FormSection.css'

const FormSection = ({
                         children
                     }) => (
    <div className={classes.FormSection}>
        {children}
    </div>
);

export default FormSection;
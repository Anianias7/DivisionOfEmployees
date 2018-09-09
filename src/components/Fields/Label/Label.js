import React from 'react'
import classes from './Label.css'

const renderStarIfRequired = (required) => {
    return required ? <span style={{color: '#F3B1B3'}}>*</span> : null;
};

const renderTopLabel = (top) => {
    return top ? classes.TopLabel : null;
};

const renderLabelWithDescription = (descr) => {
    return descr ? classes.FieldWithDescriptionLabel : null;
};

const errorStyle = (errors) => {
    let isError = undefined;
    if(errors)
        isError = errors.reduce((isError, error) => !!(error || isError) , false);
    return  isError ? classes.LabelError : null;
};

const Label = ({
                   required,
                   top,
                   descr,
                   errors,
                   name,
                   children,
                   ...props
               }) => (
    <label {...props}
           htmlFor={name}
           className={[classes.Label, renderTopLabel(top), renderLabelWithDescription(descr), errorStyle(errors)].join(' ')}>
        {children} {renderStarIfRequired(required)}
    </label>
);

export default Label;
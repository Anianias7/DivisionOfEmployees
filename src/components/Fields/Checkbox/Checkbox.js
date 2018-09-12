import React from 'react'

import classes from './Checkbox.css'

const Checkbox = ({
                      id,
                      name,
                      labelText,
                      value,
                      onChange
                  }) => {
    return (
        <label className={classes.container}>
            <input
                id={id}
                type='checkbox'
                name={name}
                value={value}
                onChange={(event) => onChange({event})}
            />
            <span className={classes.checkmark}></span>
        </label>);
};

export default Checkbox;
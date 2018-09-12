import React from 'react'

import classes from './Select.css'
import style from '../../Form/FormError/FieldError.css'

const selectOptionsList = (options) => (
    options.map(({id}) => <option value={id}
                                  key={id}>
        {id}
    </option>)
);

const Select = ({
                    name,
                    options,
                    error,
                    value,
                    placeholder,
                    required,
                    onChange
                }) => {

    const selectBorderColor = error ? style.ErrorBorderColor : classes.SelectBorderColor;

    const selectTextColor = (value) => value === "" ? classes.PlaceholderSelectShownColor : classes.SelectColor;

    return (
        <div className={classes.SelectWrapper}>
            <select
                id={name}
                name={name}
                className={[classes.Select, selectTextColor(value), selectBorderColor].join(' ')}
                onChange={(event) => onChange({event})}>
                <option value=""
                        hidden>
                    {placeholder}
                </ option>
                {selectOptionsList(options)}
            </select>
        </div>
    )
};

export default Select;
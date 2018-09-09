import React from 'react'
import classes from './Select.css'


const selectOptionsList = (options) => (
    options.map(({id}) => <option value={id}
                                        key={id}>
        {id}
    </option>)
);

const selectTextColor = (value) => value === "" ? classes.PlaceholderSelectShownColor : classes.SelectColor;

const Select = ({
                    name,
                    options,
                    value,
                    placeholder,
                    required,
                    onChange
                }) => {
    return (
        <div className={classes.SelectWrapper}>
            <select
                id={name}
                name={name}
                className={[classes.Select, selectTextColor(value)].join(' ')}
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
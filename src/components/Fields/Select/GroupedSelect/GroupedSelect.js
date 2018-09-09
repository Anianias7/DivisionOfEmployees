import React from 'react'
import classes from '../Select.css'


const otherGroupOptions = (options) => {
    const otherUsers = options.filter(option => option.id !== 3);
    const otherUsersGroup = otherUsers.map(user => <option value={user.id} key={user.id}>{user.name}</option>);
    return <optgroup label="Others">
        {otherUsersGroup}
    </optgroup>;
};

const meGroupOptions = (options) => {
    const meUser = options.filter(option => option.id === 3);
    const meUserGroup = meUser.map(user => <option value={user.id} key={user.id}>{user.name}</option>);
    return <optgroup label="Me">
        {meUserGroup}
    </optgroup>;
};

const GroupedSelect = ({
                           name,
                           options,
                           placeholder,
                           value,
                           required,
                           onChange
                       }) => {
    return (
        <div className={classes.SelectWrapper}>
            <select
                id={name}
                name={name}
                className={classes.Select}
                onChange={(event) => onChange({event})}>
                {meGroupOptions(options)}
                {otherGroupOptions(options)}
            </select>
        </div>
    )
};

export default GroupedSelect;
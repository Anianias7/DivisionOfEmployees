import React from 'react'

import classes from './Header.css'

const Header = ({
                           headerName
                       }) => (
    <div className={classes.Header}>
        {headerName}
    </div>
);

export default Header;
import React from 'react'
import classes from './Header.css'

const Header = ({
                    text
                }) => (
    <header className={classes.Header}>
        {text}
    </header>
);

export default Header;
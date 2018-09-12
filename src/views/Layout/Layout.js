import React from 'react'

import classes from './Layout.css'

const Layout = ({
                    children
                }) => (
    <div className={classes.Layout}>
        {children}
    </div>
);

export default Layout;

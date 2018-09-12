import React, {Fragment} from 'react'
import classes from './Layout.css'

const Layout = ({
                    children
                }) => (
    <Fragment>
        <div className={classes.Layout}>
            {children}
        </div>
    </Fragment>
);

export default Layout;

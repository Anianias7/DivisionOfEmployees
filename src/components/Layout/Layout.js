import React, {Fragment} from 'react'
import classes from './Layout.css'

const Layout = ({
                    children
                }) => (
    <Fragment>
        <main className={classes.Layout}>
            {children}
        </main>
    </Fragment>
);

export default Layout;

import React from 'react'

import classes from './Content.css'

const Content = ({
                     children
                 }) => (
    <div className={classes.Content}>
        {children}
    </div>
);

export default Content;
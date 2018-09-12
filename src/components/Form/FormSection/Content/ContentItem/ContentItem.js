import React from 'react'

import classes from './ContentItem.css'

const ContentItem = ({children}) => (
    <div className={classes.ContentItem}>
        {children}
    </div>
);

export default ContentItem;
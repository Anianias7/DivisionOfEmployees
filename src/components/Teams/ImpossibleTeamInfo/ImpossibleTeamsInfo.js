import React from 'react'

import classes from './ImpossibleTeamsInfo.css'

const ImpossibleTeamsInfo = () => (
    <div className={classes.ImpossibleTeamsInfo}>
        <h1 className={classes.Message}>Niestety, ale nie da się dopasować pracowników spełniając podane kryteria</h1>
    </div>
);

export default ImpossibleTeamsInfo;
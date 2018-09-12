import React from 'react'
import {NavLink} from 'react-router-dom'

import Button from "../Button/Button";

import classes from './NavigationButton.css'

const NavigationButton = ({
                              path,
                              text,
                              type
                          }) => (
    <div className={classes.NavigationButton}>
        <NavLink to={path} className={classes.NavigationButton__Link}>
            <Button text={text} type={type}/>
        </NavLink>
    </div>
);

export default NavigationButton;
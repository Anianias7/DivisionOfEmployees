import React from 'react'

import classes from './StartPage.css'
import NavigationButton from "../../components/UI/NavigationButton/NavigationButton";

const StartPage = () => (
    <div className={classes.StartPage}>
        <NavigationButton text='Dodaj pracownika' path='/form'/>
        <NavigationButton text='Sprawdż wylosowane zespoły' path='/teams'/>
    </div>

);

export default StartPage;

import React, {Component} from 'react';
import Form from "../../containers/Form/Form";
import Fields from '../../data/fields'

class FormApp extends Component {

    render() {
        return (
            <Form fields={Fields} numberOfTeams={10}/>
        );
    }
}

export default FormApp;

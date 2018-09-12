import React, {Component} from 'react';
import Form from "../../containers/Form/Form";
import fields from '../../data/fields'

class FormApp extends Component {

    render() {
        return (
            <Form fields={fields} numberOfTeams={10}/>
        );
    }
}

export default FormApp;

import React, {Component, Fragment} from 'react';

import Layout from "../components/Layout/Layout";
import Form from "../containers/Form/Form";
import Header from "../components/Layout/Header/Header";
import Fields from '../data/fields'
import rsult from '../models/EmployeesTeams'

const NUMBER_OF_TEAMS = 5;

class FormApp extends Component {

    render() {
        // console.log(rsult);
        return (
            <Fragment>
                    <Layout>
                        <Header/>
                        <Form fields={Fields}
                        numberOfTeams={NUMBER_OF_TEAMS}/>
                    </Layout>
            </Fragment>
        );
    }
}

export default FormApp;

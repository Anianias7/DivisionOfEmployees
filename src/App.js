import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Layout from "./views/Layout/Layout";
import Header from "./views/Layout/Header/Header";
import FormApp from "./views/FormApp/FormApp";
import StartPage from "./views/StartPage/StartPage";
import HackathonTeams from "./views/HackathonTeams/HackathonTeams";


class App extends Component {

    render() {
        return (
            <Router>
                <Layout>
                    <Header text="KorpeX Hackaton!"/>
                    <Route exact path='/' component={StartPage}/>
                    <Route path='/form' render={() => <FormApp addEmployee={this.addEmployee}/>}/>
                    <Route path='/teams' render={() => <HackathonTeams/>}/>
                </Layout>
            </Router>

        );
    }
}

export default App;

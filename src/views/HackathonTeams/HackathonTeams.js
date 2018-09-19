import React, {Component} from 'react'
import { connect } from 'react-redux'

import TeamCard from "../../components/Teams/TeamCard/TeamCard";
import ImpossibleTeamsInfo from "../../components/Teams/ImpossibleTeamInfo/ImpossibleTeamsInfo";
import Spinner from "../../components/UI/Spinner/Spinner";

import utils from '../../utils'
import config from '../../data/config'

import classes from './HackathonTeams.css'
import EmployeesTeams from "../../models/EmployeesTeams";

class HackathonTeams extends Component {

    state = ({
        loading: true,
        numberOfRandomEmployees: config.NUMBER_OF_EMPLOYEES,
        teams: null
    });

    componentDidMount() {
        setTimeout(() => {
            console.log(JSON.stringify(this.props.employees, undefined, 2))
            const result = new EmployeesTeams(this.props.employees).createEmployeesGraph();
            const teams = result ?
                utils.chunkArray(result.listOfVertices.map(vertex => vertex.variable.value), config.TEAM_SIZE) :
                undefined;

            this.setState({
                loading: false,
                teams
            })
        }, 30);
    }

    mapTeamsToTeamCard = () => this.state.teams.map((team, id) =>
        <TeamCard key={id}
                  teamNumber={id}
                  teamMembers={team}
        />);

    teamsResult = () => (
        this.state.teams ? <ul className={classes.HackathonTeam}>
            {this.mapTeamsToTeamCard()}
        </ul> : <ImpossibleTeamsInfo/>
    );

    render() {
        return this.state.loading ?
            <Spinner/> :
            this.teamsResult()
    }
}
 const mapStateToProps = state => {
    return {
        employees: state.employees
    }
 };

export default connect(mapStateToProps)(HackathonTeams);